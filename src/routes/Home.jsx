import { Box, Grid,  HStack } from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItems from "../components/CardItems";

const featuresLists = [
    {
        title: "스마트웹3기", 
        description: "동해물과 백두산이 마르고 닳도록", 
        buttonText: "자세히보기"
    }, 
    {
        title: "API 요청량 하루 3000번 리미트", 
        description: "하루 API요청 횟수가 3,000회로 제한되어 있어 컨텐츠가 보이지 않을 수 있습니다.", 
        buttonText: "자세히보기"
    }, 
    {
        title: "React", 
        description: "React + Typescript + Chakra UI를 활용한 마블페이지 제작", 
        buttonText: "자세히보기"
    }, 

]

export default function Home(){
    return <>
        {/* 캐러셀 */}
        <Box>
            <CarouselSlick />
        </Box>

        {/* 특장점 */}
        <HStack w="full" justifyContent="center" py="16" bg="gray.100">

            <Grid 
            gap="4"
            w="7xl" 
            templateColumns={"repeat(3, 1fr)"}>
                {
                    featuresLists.map((item, i) => (
                        <CardItems key={i} item={item} />
                    ))
                }
                
                
            </Grid>
        </HStack>
    </>
    
}