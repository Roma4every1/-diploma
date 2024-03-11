export enum Breackpoint {
  SM = 568,
  MD = 1024,
}

export const Media = {
  SM: `@media screen and (max-width: ${Breackpoint.SM}px)`,
  MD: `@media screen and (max-width: ${Breackpoint.MD}px)`,
};
