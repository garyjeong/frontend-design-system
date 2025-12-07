
import * as React from 'react';

interface UseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the card will be interactive and respond to hover/focus states.
   */
  interactive?: boolean;
  /**
   * If `true`, the card will show a subtle hover effect.
   */
  hoverable?: boolean;
  /**
   * The ref to the card element.
   */
  cardRef?: React.Ref<HTMLDivElement>;
}

interface UseCardReturn {
  /**
   * Props to spread on the card element.
   */
  cardProps: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Wether the card is interactive.
   */
  interactive: boolean;
  /**
   * Wether the card is hoverable.
   */
  hoverable: boolean;
}

export const useCard = (props: UseCardProps): UseCardReturn => {
  const { interactive = false, hoverable = false, cardRef, ...other } = props;

  const cardProps: React.HTMLAttributes<HTMLDivElement> = {
    ...other,
    ref: cardRef,
    role: interactive ? 'article' : undefined,
    tabIndex: interactive ? 0 : undefined,
  };

  return {
    cardProps,
    interactive,
    hoverable,
  };
};
