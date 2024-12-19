import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartSimple} from "@fortawesome/free-solid-svg-icons"; // Import the faChartSimple icon

const Ten = () => {
  return (
    <StyledWrapper>
      <div className="gas chart">
        <FontAwesomeIcon className="symbol" icon={faChartSimple} size="2x" />
        {/* Use the faChartSimple icon */}
        <p className="font-chakra font-bold text-xl">Competitive Coding</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #gasses {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .gas {
    --blur: 1.75rem;
    --box-blur: calc(0.5 * var(--blur));
    --glow: var(--color);
    --size: 12rem;

    align-items: center;
    border-radius: 12px;
    border: 4px solid currentColor;
    box-shadow:
      /* --- "glass" tube --- */
      /* inside */ inset 0 0 0
        2px rgba(0, 0, 0, 0.15),
      /* outside */ 0 0 0 2px rgba(0, 0, 0, 0.15),
      /* --- glow --- */ /* inside */ inset 0 0 var(--box-blur) var(--glow),
      /* outside */ 0 0 var(--box-blur) var(--glow);
    color: var(--color, white);
    display: inline-flex;
    flex-direction: column;
    font-family: system-ui, sans-serif;
    height: var(--size);
    justify-content: space-around;
    padding: 1rem;
    width: var(--size);
  }

  .symbol {
    font-size: 4rem;
    font-family: "Neon Glow";
    text-shadow: 0 0 var(--blur) var(--glow);
  }

  .gas.chart {
    --color: #e11d48; /* Tailwind rose-600 color */
    filter: brightness(110%);
  }

  .gas.chart:hover {
    filter: brightness(120%) drop-shadow(0 0 10px var(--glow));
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .gas {
      --size: 8rem; /* Reduce size for tablets */
      padding: 0.5rem; /* Reduce padding */
    }

    .symbol {
      font-size: 3rem; /* Smaller icon size on tablets */
    }

    .font-chakra {
      font-size: 1rem; /* Smaller text on tablets */
    }

    #gasses {
      gap: 10px; /* Adjust the gap between items */
    }
  }

  @media (max-width: 480px) {
    .gas {
      --size: 6rem; /* Further reduce size on smaller screens */
    }

    .symbol {
      font-size: 2.5rem; /* Smaller icon size for very small screens */
    }

    .font-chakra {
      font-size: 0.65rem; /* Adjust text size */
    }
  }
`;

export default Ten;