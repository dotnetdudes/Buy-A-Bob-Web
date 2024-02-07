/**
 *
 * Asynchronously loads the component for Carousel
 *
 */

import { lazyLoad } from "app/utils/loadable";

export const Carousel = lazyLoad(
  () => import("./index"),
  (module) => module.Carousel,
);
