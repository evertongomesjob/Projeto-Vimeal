import { useLocale } from "../context/LocaleContext";

/** Diagrama de arquitetura — protótipo v2 (Vimeal Redesign.html) */
export function HeroArchitectureDiagram() {
  const { t } = useLocale();

  return (
    <svg className="arch-svg mt-6 block w-full" viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        {/* Animação de desenho das linhas */}
        <style>{`
          @keyframes drawLine {
            from { stroke-dashoffset: 200; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes flowData {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
          }
          .connector-line {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: drawLine 1.5s ease-out forwards;
          }
          .connector-line-1 { animation-delay: 0.2s; }
          .connector-line-2 { animation-delay: 0.4s; }
          .connector-line-3 { animation-delay: 0.6s; }
          .connector-line-4 { animation-delay: 0.8s; }
          .connector-line-5 { animation-delay: 1.2s; }
          .connector-line-6 { animation-delay: 1.4s; }
          
          .data-pulse {
            animation: flowData 2s ease-in-out infinite;
          }
          .data-pulse-1 { animation-delay: 1.7s; }
          .data-pulse-2 { animation-delay: 1.9s; }
          .data-pulse-3 { animation-delay: 2.1s; }
          .data-pulse-4 { animation-delay: 2.3s; }
          .data-pulse-5 { animation-delay: 2.7s; }
          .data-pulse-6 { animation-delay: 2.9s; }
          
          .connector-glow {
            animation: pulse 3s ease-in-out infinite;
          }
        `}</style>
        
        {/* Gradiente para efeito de fluxo */}
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#af4a43" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="#d88a82" stopOpacity="1"/>
          <stop offset="100%" stopColor="#af4a43" stopOpacity="0.8"/>
        </linearGradient>
      </defs>

      <rect x="10" y="40" width="500" height="70" rx="10" fill="#faf8f4" stroke="#eceae6" />
      <rect x="10" y="130" width="500" height="70" rx="10" fill="#faf8f4" stroke="#eceae6" />
      <rect x="10" y="220" width="500" height="70" rx="10" fill="#faf8f4" stroke="#eceae6" />

      <text x="20" y="32" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8a8177" letterSpacing="1">
        {t("diagram.sources")}
      </text>
      <text x="20" y="122" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8a8177" letterSpacing="1">
        {t("diagram.platform")}
      </text>
      <text x="20" y="212" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8a8177" letterSpacing="1">
        {t("diagram.delivery")}
      </text>

      <g>
        <rect x="24" y="58" width="108" height="34" rx="6" fill="#fff" stroke="#d9d2c3" />
        <text x="78" y="79" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#2a251d" fontWeight="600">
          {t("diagram.erpSap")}
        </text>
        <rect x="144" y="58" width="108" height="34" rx="6" fill="#fff" stroke="#d9d2c3" />
        <text x="198" y="79" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#2a251d" fontWeight="600">
          {t("diagram.crm")}
        </text>
        <rect x="264" y="58" width="108" height="34" rx="6" fill="#fff" stroke="#d9d2c3" />
        <text x="318" y="79" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#2a251d" fontWeight="600">
          {t("diagram.sqlServer")}
        </text>
        <rect x="384" y="58" width="108" height="34" rx="6" fill="#fff" stroke="#d9d2c3" />
        <text x="438" y="79" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#2a251d" fontWeight="600">
          {t("diagram.apisFiles")}
        </text>
      </g>

      {/* Conectores superiores com animação */}
      <g className="connector-glow">
        <path className="connector-line connector-line-1" d="M78 92 L200 130" stroke="#af4a43" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
        <path className="connector-line connector-line-2" d="M198 92 L200 130" stroke="#af4a43" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
        <path className="connector-line connector-line-3" d="M318 92 L320 130" stroke="#af4a43" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
        <path className="connector-line connector-line-4" d="M438 92 L320 130" stroke="#af4a43" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      </g>

      {/* Pulsos de dados fluindo - camada superior */}
      <g>
        <circle className="data-pulse data-pulse-1" cx="140" cy="111" r="3" fill="url(#flowGradient)" />
        <circle className="data-pulse data-pulse-2" cx="199" cy="111" r="3" fill="url(#flowGradient)" />
        <circle className="data-pulse data-pulse-3" cx="319" cy="111" r="3" fill="url(#flowGradient)" />
        <circle className="data-pulse data-pulse-4" cx="380" cy="111" r="3" fill="url(#flowGradient)" />
      </g>

      <g>
        <rect x="24" y="148" width="228" height="34" rx="6" fill="#af4a43" />
        <text x="138" y="169" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#fff" fontWeight="700">
          {t("diagram.adfSsis")}
        </text>
        <rect x="264" y="148" width="228" height="34" rx="6" fill="#15120E" />
        <text x="378" y="169" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#FAF8F4" fontWeight="700">
          {t("diagram.fabricLakehouse")}
        </text>
      </g>

      {/* Conectores inferiores com animação */}
      <g className="connector-glow">
        <path className="connector-line connector-line-5" d="M138 182 L160 220" stroke="#af4a43" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
        <path className="connector-line connector-line-6" d="M378 182 L360 220" stroke="#af4a43" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      </g>

      {/* Pulsos de dados fluindo - camada inferior */}
      <g>
        <circle className="data-pulse data-pulse-5" cx="149" cy="201" r="3" fill="url(#flowGradient)" />
        <circle className="data-pulse data-pulse-6" cx="369" cy="201" r="3" fill="url(#flowGradient)" />
      </g>

      <g>
        <rect x="24" y="238" width="148" height="34" rx="6" fill="#fff" stroke="#d9d2c3" />
        <text x="98" y="259" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#2a251d" fontWeight="600">
          {t("diagram.powerBi")}
        </text>
        <rect x="184" y="238" width="148" height="34" rx="6" fill="#fff" stroke="#d9d2c3" />
        <text x="258" y="259" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#2a251d" fontWeight="600">
          {t("diagram.paginatedSsrs")}
        </text>
        <rect x="344" y="238" width="148" height="34" rx="6" fill="#fff" stroke="#d9d2c3" />
        <text x="418" y="259" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#2a251d" fontWeight="600">
          {t("diagram.excelTeams")}
        </text>
      </g>

      <rect x="10" y="302" width="500" height="28" rx="6" fill="#dfe6d8" stroke="#c9d3be" />
      <circle cx="30" cy="316" r="4" fill="#3d5a3a" />
      <text x="44" y="320" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#2a3f28" letterSpacing="1">
        {t("diagram.governance")}
      </text>
    </svg>
  );
}
