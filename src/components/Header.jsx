import { Box, Button, HStack, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill } from "react-icons/bs"


export default function Header(){
    const { colorMode, toggleColorMode } = useColorMode();
    return <Stack 
    bg="gray.800"
    w="full" 
    h="60px" 
    color="white" 
    fontWeight={600} 
    fontSize="20px"
    alignItems="center"
    justifyContent="center"
    boxShadow="sm"
    position="fixed"
    >
        <HStack w="7xl" h="full" justifyContent="space-between" >
            <HStack spacing="8">
                <Box w="24">
                    <Image src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png" alt="Main logo" />
                </Box>
                <HStack spacing="4" textTransform="uppercase">
                    <Text>Character</Text>
                    <Text>comics</Text>
                    <Text>events</Text>
                </HStack>
            </HStack>
            <Button
                onClick={toggleColorMode}
            >
                <BsFillSunFill />
            </Button>
        </HStack>
    </Stack>
}