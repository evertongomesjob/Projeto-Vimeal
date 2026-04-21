import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[Vimeal]", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-paper px-6 py-12 text-ink dark:bg-[#0f0e0b] dark:text-paper">
          <div className="mx-auto max-w-lg rounded-2xl border border-line bg-white p-8 shadow-card dark:border-white/10 dark:bg-zinc-900">
            <h1 className="mb-3 text-lg font-bold">Erro ao carregar a interface</h1>
            <p className="mb-4 text-sm text-ink-3 dark:text-zinc-400">
              Algo impediu o React de renderizar. Detalhes abaixo — úteis para depuração (F12 → Console).
            </p>
            <pre className="max-h-48 overflow-auto rounded-lg bg-paper-2 p-4 text-xs leading-relaxed text-ink-2 dark:bg-zinc-950 dark:text-zinc-300">
              {this.state.error.message}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
