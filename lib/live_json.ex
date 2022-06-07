defmodule LiveJson do

  alias Phoenix.LiveView.Utils

  require Jsonpatch
  require JsonDiffEx

  def push_patch(socket, doc_name, new_data, method \\ :rfc) do

    doc_atom = safer_string_to_atom("lj" <> doc_name)
    old_data = Map.get(socket.assigns, doc_atom)

    data_patch = if method == :rfc do
       Jsonpatch.diff(old_data, new_data)
      |> Jsonpatch.Mapper.to_map()
    else
      JsonDiffEx.diff(old_data, new_data)
    end

    socket
    |> Utils.assign(doc_atom, new_data)
    |> Utils.push_event("lj:patch", %{doc_name: data_patch})

  end

  # XXX: Don't know if this is wise or necessary,
  # but maybe will help avoid the atom limit.
  @spec safer_string_to_atom(binary) :: atom
  def safer_string_to_atom(str) do
    try do
      String.to_existing_atom(str)
    rescue
      ArgumentError -> String.to_atom(str)
    end
  end

end
