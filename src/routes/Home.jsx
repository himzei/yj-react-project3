import { Box, Button, Grid,  HStack, Image, Text, VStack } from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItems from "../components/CardItems";
import { RxEnter } from "react-icons/rx"
import TitleImageSkew from "../components/TitleImageSkew";

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

        {/* 기울어진 이미지 타이틀 */}
        <TitleImageSkew 
            title="Comics"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt est quos in cum delectus numquam corrupti eligendi unde itaque, natus voluptatem, esse corporis voluptate perferendis adipisci molestiae. Ipsa, non ducimus?"
            imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
        />

        {/* 기울어진 이미지 타이틀 */}
        <TitleImageSkew 
            title="Events"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt est quos in cum delectus numquam corrupti eligendi unde itaque, natus voluptatem, esse corporis voluptate perferendis adipisci molestiae. Ipsa, non ducimus?"
            imgUrl="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />

    </>
    
}