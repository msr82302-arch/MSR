interface ArchitectureDiagramProps {
  type: 'web3-supply-chain' | 'icat-speech';
  compact?: boolean;
}

export default function ArchitectureDiagram({ type, compact = false }: ArchitectureDiagramProps) {
  if (type === 'web3-supply-chain') {
    return (
      <div
        className={`bg-[#171717] text-white rounded-xl border border-neutral-800 ${
          compact ? 'p-4' : 'p-5 sm:p-6'
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-800">
          <span className="font-display text-xs sm:text-sm font-semibold text-white">
            Hybrid Web2 / Web3 System Architecture
          </span>
          <span className="font-mono text-[11px] text-neutral-400">
            React · DRF · PostgreSQL · Web3.py · Ethereum
          </span>
        </div>

        <svg
          viewBox="0 0 760 220"
          className="w-full h-auto"
          role="img"
          aria-label="Architecture diagram showing React frontend connected to Django REST Framework backend, PostgreSQL database, and Ethereum smart contracts via Web3.py"
        >
          {/* Node 1: React Client */}
          <rect x="12" y="42" width="150" height="126" rx="10" fill="#232323" stroke="#3F3F46" strokeWidth="1.5" />
          <text x="87" y="72" textAnchor="middle" fill="#D90B2B" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            CLIENT LAYER
          </text>
          <text x="87" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
            React Interface
          </text>
          <text x="87" y="120" textAnchor="middle" fill="#A3A3A3" fontSize="10.5" fontFamily="DM Sans, sans-serif">
            Manufacturer · Logistics
          </text>
          <text x="87" y="137" textAnchor="middle" fill="#A3A3A3" fontSize="10.5" fontFamily="DM Sans, sans-serif">
            Retailer · Customer UI
          </text>

          {/* Arrow 1 -> 2 */}
          <line x1="162" y1="105" x2="208" y2="105" stroke="#D90B2B" strokeWidth="2" />
          <polygon points="208,100 218,105 208,110" fill="#D90B2B" />
          <text x="190" y="94" textAnchor="middle" fill="#A3A3A3" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            REST
          </text>

          {/* Node 2: Django + DRF */}
          <rect x="220" y="24" width="178" height="162" rx="10" fill="#232323" stroke="#D90B2B" strokeWidth="1.5" />
          <text x="309" y="52" textAnchor="middle" fill="#FF6B7F" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            API &amp; RBAC CORE
          </text>
          <text x="309" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
            Django + DRF
          </text>
          <text x="309" y="102" textAnchor="middle" fill="#D4D4D8" fontSize="10.5" fontFamily="DM Sans, sans-serif">
            Role-Based Access Control
          </text>
          <text x="309" y="120" textAnchor="middle" fill="#D4D4D8" fontSize="10.5" fontFamily="DM Sans, sans-serif">
            Provenance State Validation
          </text>
          <text x="309" y="138" textAnchor="middle" fill="#D4D4D8" fontSize="10.5" fontFamily="DM Sans, sans-serif">
            Batch &amp; Custody Endpoints
          </text>
          <rect x="242" y="152" width="134" height="22" rx="4" fill="#171717" stroke="#3F3F46" />
          <text x="309" y="167" textAnchor="middle" fill="#E5E5E5" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Web3.py Bridge
          </text>

          {/* Arrow 2 -> PostgreSQL (Top Right) */}
          <line x1="398" y1="68" x2="462" y2="54" stroke="#737373" strokeWidth="1.5" />
          <polygon points="461,49 472,52 463,59" fill="#737373" />

          {/* Node 3: PostgreSQL */}
          <rect x="474" y="16" width="274" height="82" rx="10" fill="#232323" stroke="#3F3F46" strokeWidth="1.5" />
          <text x="494" y="42" fill="#A3A3A3" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            OFF-CHAIN RELATIONAL STORE
          </text>
          <text x="494" y="64" fill="#FFFFFF" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
            PostgreSQL Database
          </text>
          <text x="494" y="83" fill="#A3A3A3" fontSize="10.5" fontFamily="DM Sans, sans-serif">
            Users, Roles, Product Metadata &amp; Tx Hash Index
          </text>

          {/* Arrow 2 -> Ethereum (Bottom Right) */}
          <line x1="398" y1="150" x2="462" y2="162" stroke="#D90B2B" strokeWidth="2" />
          <polygon points="463,157 472,164 461,167" fill="#D90B2B" />

          {/* Node 4: Ethereum Smart Contracts */}
          <rect x="474" y="116" width="274" height="88" rx="10" fill="#232323" stroke="#D90B2B" strokeWidth="1.5" />
          <text x="494" y="142" fill="#FF6B7F" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            ON-CHAIN VERIFICATION
          </text>
          <text x="494" y="164" fill="#FFFFFF" fontSize="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
            Ethereum Smart Contracts
          </text>
          <text x="494" y="184" fill="#D4D4D8" fontSize="10.5" fontFamily="DM Sans, sans-serif">
            Solidity Provenance Ledger &amp; Authenticity Proof
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`bg-[#171717] text-white rounded-xl border border-neutral-800 ${
        compact ? 'p-4' : 'p-5 sm:p-6'
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-800">
        <span className="font-display text-xs sm:text-sm font-semibold text-white">
          ICAT Speech Processing Pipeline Architecture
        </span>
        <span className="font-mono text-[11px] text-neutral-400">
          Django · Whisper · Translation · TTS · SQLite
        </span>
      </div>

      <svg
        viewBox="0 0 760 200"
        className="w-full h-auto"
        role="img"
        aria-label="ICAT pipeline diagram showing audio upload into Django backend, Whisper speech-to-text, translation integration, text-to-speech synthesis, and SQLite storage"
      >
        {/* Step 1: Input UI */}
        <rect x="12" y="40" width="130" height="106" rx="10" fill="#232323" stroke="#3F3F46" strokeWidth="1.5" />
        <text x="77" y="68" textAnchor="middle" fill="#A3A3A3" fontSize="10" fontFamily="JetBrains Mono, monospace">
          01 INPUT
        </text>
        <text x="77" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
          HTML / CSS
        </text>
        <text x="77" y="114" textAnchor="middle" fill="#A3A3A3" fontSize="10.5" fontFamily="DM Sans, sans-serif">
          Audio Upload &amp;
        </text>
        <text x="77" y="130" textAnchor="middle" fill="#A3A3A3" fontSize="10.5" fontFamily="DM Sans, sans-serif">
          Language Select
        </text>

        {/* Arrow 1 -> 2 */}
        <line x1="142" y1="93" x2="170" y2="93" stroke="#D90B2B" strokeWidth="2" />
        <polygon points="170,88 180,93 170,98" fill="#D90B2B" />

        {/* Step 2: Whisper STT */}
        <rect x="182" y="40" width="142" height="106" rx="10" fill="#232323" stroke="#D90B2B" strokeWidth="1.5" />
        <text x="253" y="68" textAnchor="middle" fill="#FF6B7F" fontSize="10" fontFamily="JetBrains Mono, monospace">
          02 STT ENGINE
        </text>
        <text x="253" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
          Whisper AI
        </text>
        <text x="253" y="114" textAnchor="middle" fill="#D4D4D8" fontSize="10.5" fontFamily="DM Sans, sans-serif">
          Speech Recognition
        </text>
        <text x="253" y="130" textAnchor="middle" fill="#D4D4D8" fontSize="10.5" fontFamily="DM Sans, sans-serif">
          Source Transcript
        </text>

        {/* Arrow 2 -> 3 */}
        <line x1="324" y1="93" x2="352" y2="93" stroke="#D90B2B" strokeWidth="2" />
        <polygon points="352,88 362,93 352,98" fill="#D90B2B" />

        {/* Step 3: Translation */}
        <rect x="364" y="40" width="142" height="106" rx="10" fill="#232323" stroke="#3F3F46" strokeWidth="1.5" />
        <text x="435" y="68" textAnchor="middle" fill="#A3A3A3" fontSize="10" fontFamily="JetBrains Mono, monospace">
          03 NLP LAYER
        </text>
        <text x="435" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
          Translation
        </text>
        <text x="435" y="114" textAnchor="middle" fill="#A3A3A3" fontSize="10.5" fontFamily="DM Sans, sans-serif">
          Text Normalization &amp;
        </text>
        <text x="435" y="130" textAnchor="middle" fill="#A3A3A3" fontSize="10.5" fontFamily="DM Sans, sans-serif">
          Target Translation
        </text>

        {/* Arrow 3 -> 4 */}
        <line x1="506" y1="93" x2="534" y2="93" stroke="#D90B2B" strokeWidth="2" />
        <polygon points="534,88 544,93 534,98" fill="#D90B2B" />

        {/* Step 4: TTS Synthesis */}
        <rect x="546" y="40" width="202" height="106" rx="10" fill="#232323" stroke="#D90B2B" strokeWidth="1.5" />
        <text x="647" y="68" textAnchor="middle" fill="#FF6B7F" fontSize="10" fontFamily="JetBrains Mono, monospace">
          04 AUDIO OUTPUT
        </text>
        <text x="647" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
          Text-to-Speech (TTS)
        </text>
        <text x="647" y="114" textAnchor="middle" fill="#D4D4D8" fontSize="10.5" fontFamily="DM Sans, sans-serif">
          Synthesized Target Audio
        </text>
        <text x="647" y="130" textAnchor="middle" fill="#D4D4D8" fontSize="10.5" fontFamily="DM Sans, sans-serif">
          Playback in Web UI
        </text>

        {/* Bottom Django + SQLite Bar */}
        <rect x="182" y="162" width="566" height="28" rx="6" fill="#202022" stroke="#3F3F46" strokeWidth="1" />
        <text x="465" y="180" textAnchor="middle" fill="#D4D4D8" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
          Orchestrated by Python &amp; Django Backend · Logged to SQLite Database
        </text>
      </svg>
    </div>
  );
}
