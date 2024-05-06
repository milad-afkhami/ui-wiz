import { Div, Text } from "style-wiz";

type Item = { url: string; title: string };
type LastItem = { title: string; url?: never };

export type BreadcrumbProps = {
  items: [Item, ...Item[], LastItem];
};

const Breadcrumb = (props: BreadcrumbProps) => {
  const { items } = props;

  return (
    <Div flex={["center"]}>
      {items.map(({ title, url }) => (
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

          {url && (
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
