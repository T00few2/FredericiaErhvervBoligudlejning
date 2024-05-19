import { Text, Link } from "@chakra-ui/react"

export default function Footer() {
    return(
        <div>
            <Text align={'center'} fontWeight={600}>Fredericia Erhverv ApS</Text>
            <Text align={'center'}>Telefon: 
            <Link href='tel:+4522996421' color='black' whiteSpace="pre-line" ml={2}>22 99 64 21</Link>
            </Text>
            <Text align={'center'}>E-mail: 
            <Link href='mailto:annettekjaer2@yahoo.dk' color='black' whiteSpace="pre-line" ml={2}>annettekjaer2@yahoo.dk</Link>
            </Text>
            <Text align={'center'} mb={8}>CVR: 35867708</Text>

        </div>

    )
}
