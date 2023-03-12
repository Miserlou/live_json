defmodule LiveJson.MixProject do
  use Mix.Project

  @version "0.4.4"

  def project do
    [
      app: :live_json,
      version: @version,
      elixir: "~> 1.13",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      package: package(),
      aliases: aliases(),
      docs: docs(),
      name: "LiveJSON",
      homepage_url: "https://github.com/Miserlou/live_json",
      description: """
      LiveJSON  - Interact with a client's JavaScript context from LiveView
      """
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:phoenix, ">= 1.6.0"},
      {:phoenix_html, ">= 3.1.0"},
      {:phoenix_live_view, ">= 0.16.0", allow_pre: true},
      {:jsonpatch, "~> 0.13.1"},
      {:json_diff_ex, "~> 0.5.0"},
      {:jason, "~> 1.3.0", optional: true},
      {:esbuild, "~> 0.2", only: :dev},
      {:telemetry, "~> 0.4.2 or ~> 1.0"},
      {:ex_doc, "~> 0.27", only: :dev, runtime: false}
    ]
  end

  defp docs do
    [
      main: "LiveJson",
      source_ref: "v#{@version}",
      source_url: "https://github.com/Miserlou/live_json"
    ]
  end

  defp package do
    [
      maintainers: ["Rich Jones"],
      licenses: ["MIT"],
      links: %{
        Changelog: "https://hexdocs.pm/live_json/changelog.html",
        GitHub: "https://github.com/Miserlou/live_json"
      },
      files:
        ~w(assets/js lib priv) ++
          ~w(CHANGELOG.md LICENSE.md mix.exs package.json README.md)
    ]
  end

  defp aliases do
    [
      "assets.build": ["esbuild module", "esbuild cdn", "esbuild cdn_min", "esbuild main"],
      "assets.watch": ["esbuild module --watch"]
    ]
  end
end
