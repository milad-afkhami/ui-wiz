import { Div, Text } from "style-wiz";

type Item = { url: string; title: string };

export type BreadcrumbProps = {
  items: Item[];
};

const Breadcrumb = (props: BreadcrumbProps) => {
  const { items } = props;

  return (
    <Div flex={["center"]}>
      {items.map(({ title, url }, index) => (
        <Div flex={["center"]}>
          {url ? (
            <a href={url}>
              <Text
                color="brand-primary-main"
                styles={{
                  borderBottom: "1px solid var(--color-brand-primary-light)",
                }}
              >
                {title}
              </Text>
            </a>
          ) : (
            <Text color="text-secondary-main">{title}</Text>
          )}

          {index === items.length - 1 && (
            <Div px="2" flex={["flex-end"]}>
              <Text
                color="text-secondary-main"
                size="h-sm"
                styles={{ 'dir="rtl" &': { transform: "rotate(180deg)" } }}
              >
                {">"}
              </Text>
            </Div>
          )}
        </Div>
      ))}
    </Div>
  );
};

export default Breadcrumb;
