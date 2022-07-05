import { Center, Checkbox, Divider, VStack, Heading } from '@chakra-ui/react'
export default function Home() {
  return (
    <Center>
    <VStack mt={10} align="start" p={6} spacing={4} bg="gray.50">
      <Checkbox>Hello</Checkbox>
      <Checkbox>I Will wink on hover if you select me!</Checkbox>
      <Checkbox>Bye</Checkbox>
      <Divider />
      <Heading>Note</Heading>
      <p>only in production with swcMinify: true.</p>
    </VStack>
    </Center>
  )
}
