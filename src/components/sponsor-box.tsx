import { Box, Flex, Image, Link, NavLink, Text } from "theme-ui";

export const SponsorBox: React.FC = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "muted",
      }}
    >
      <Box sx={{ backgroundColor: "primary", color: "white", px: 2, py: 1 }}>
        <Text>Yhteistyössä</Text>
      </Box>
      <Box sx={{ p: 2, maxWidth: "100%" }}>
        <Flex sx={{ flexDirection: "column", gap: 1 }}>
          <Link href="https://armoria.fi/" target={"_blank"}>
            <Image src={"/sponsors/armoria.jpeg"} alt="Armoria banner" />
          </Link>
          <Link href="https://milgear.fi/" target={"_blank"}>
            <Image src={"/sponsors/milgear.jpeg"} alt="Milgear banner" />
          </Link>
          <Link href="https://hatka.fi/" target={"_blank"}>
            <Image src={"/sponsors/hatka.jpeg"} alt="Hatka banner" />
          </Link>
          <Link href="https://atom-airsoft.fi/" target={"_blank"}>
            <Image
              src={"/sponsors/atomairsoft.jpeg"}
              alt="Atom airsoft banner"
            />
          </Link>
          <Link href="https://tierone.fi/" target={"_blank"}>
            <Image src={"/sponsors/tierone.png"} alt="Tierone banner" />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};
