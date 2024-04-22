import { VStack, Button, Center } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaBell, FaCog } from "react-icons/fa";

const Index = () => {
  return (
    <Center height="100vh">
      <VStack spacing={4}>
        <Button leftIcon={<FaHome />} colorScheme="teal" size="lg">
          Home
        </Button>
        <Button leftIcon={<FaUser />} colorScheme="teal" size="lg">
          Profile
        </Button>
        <Button leftIcon={<FaEnvelope />} colorScheme="teal" size="lg">
          Messages
        </Button>
        <Button leftIcon={<FaBell />} colorScheme="teal" size="lg">
          Notifications
        </Button>
        <Button leftIcon={<FaCog />} colorScheme="teal" size="lg">
          Settings
        </Button>
      </VStack>
    </Center>
  );
};

export default Index;
