const Logo = ({ className = "", width = "200" }) => {
  return (
    <svg
      width={width}
      height="auto"
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fondo decorativo */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b6b', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#ee5a6f', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c44569', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#2c3e50', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#34495e', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Elemento gráfico - Cámara estilizada */}
      <g transform="translate(15, 25)">
        {/* Cuerpo de la cámara */}
        <rect x="0" y="15" width="45" height="30" rx="4" fill="url(#logoGradient)" />
        
        {/* Lente */}
        <circle cx="22.5" cy="30" r="12" fill="#2c3e50" />
        <circle cx="22.5" cy="30" r="8" fill="#34495e" />
        <circle cx="22.5" cy="30" r="5" fill="#ecf0f1" opacity="0.3" />
        
        {/* Visor */}
        <rect x="35" y="10" width="8" height="6" rx="1" fill="#34495e" />
        
        {/* Botón de grabación */}
        <circle cx="40" cy="22" r="2.5" fill="#ff6b6b" />
        
        {/* Detalle de luz */}
        <circle cx="8" cy="22" r="1.5" fill="#ecf0f1" opacity="0.6" />
      </g>

      {/* Texto DGA */}
      <text
        x="75"
        y="48"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="36"
        fontWeight="bold"
        fill="url(#textGradient)"
        letterSpacing="2"
      >
        DGA
      </text>

      {/* Texto Producciones */}
      <text
        x="75"
        y="70"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="300"
        fill="#7f8c8d"
        letterSpacing="3"
      >
        PRODUCCIONES
      </text>

      {/* Línea decorativa */}
      <line
        x1="75"
        y1="55"
        x2="280"
        y2="55"
        stroke="#ff6b6b"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
};

export default Logo;
