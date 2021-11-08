import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

import { classNames } from "./class-names";

export const convertParams = <T extends unknown>(
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  return {
    props: {
      params: ctx.params as T,
    },
  };
};

export { classNames };
