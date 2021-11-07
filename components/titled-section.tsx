import { FunctionComponent } from "react";
interface Props {
  title: string;
}
export const TitledSection: FunctionComponent<Props> = ({
  title,
  children,
}) => (
  <div>
    <h2 className="text-2xl mb-2">{title}</h2>
    {children}
  </div>
);
