import { Box, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const News = ({title, urlToImage, description, author} ) => {
    return (
        <Container>
            <Card maxW='md' marginBottom={"20px"}>
            <CardHeader>
            <Flex spacing='4' justifyContent={"center"}>
            <Heading size="lg">{title}</Heading>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    {description}
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src={urlToImage}
                alt='Chakra UI'
            />

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Box>
                            <Text>{author}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardFooter>
        </Card>
        </Container>
        
    );
}

export default News;
