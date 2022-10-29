import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Img18,
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from "../public/index";
import { PosterCards } from "../components/PosterCards/PosterCards";
import { Navbar } from "../components/Navbar/Navbar";
import { Namaste } from "../public/svg/Namaste";
import { Shoewear } from "../public/svg/Shoewear";
import { Jewelry } from "../public/svg/Jewelry";
import { RealEstate } from "../public/svg/RealEstate";
import { Bakery } from "../public/svg/Bakery";
import { Motorcycle } from "../public/svg/Motorcycle";

export interface Design {
  img: StaticImageData | string;
  title: string;
  designation: string;
}

interface CategoriesType {
  svg: any;
  title: string;
  color: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [data, setData] = useState<any[]>([]);
  const [ImagesArr, setImagesArr] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/images")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);

        for (let i = 0; i < data.length; i++) {
          let imageObject = {
            title: String,
            designation: String,
            img: String,
          };

          (imageObject.title = data[i].title),
            (imageObject.designation = data[i].designation),
            (imageObject.img = data[i].image);

            setImagesArr(ImagesArr.push(imageObject))
        }

        // setData(data)
        // const ImagesArr: Design[] = [
        // ];
        // const imageObject = {
        //   title: data.title,
        //   designation: data.designation,
        //   img: data.image
        // }
        // for(let i = 0; i < data.length; i++) {
        //   ImagesArr.push(data[i])
        // }
        // console.log(ImagesArr)
      });
  }, []);

  const Categories: CategoriesType[] = [
    { svg: <Namaste />, title: "Thank You", color: "#F2994A" },
    {
      svg: <Shoewear />,
      title: "Footwear",
      color: "#EB5757",
    },
    { svg: <Jewelry />, title: "Jewelry", color: "#F2C94C" },
    { svg: <RealEstate />, title: "Real Estate", color: "#219653" },
    { svg: <Bakery />, title: "Bakery", color: "#2D9CDB" },
    { svg: <Motorcycle />, title: "Motorcycle", color: "#BB6BD9" },
  ];

  return (
    <main>
      <ul>
        {data.map((data) => (
          <div>
            <p>{data.title}</p>
            <p>{data.designation}</p>
            <img src={data.image} alt="" />
          </div>
        ))}
      </ul>
      <Box sx={{ flexGrow: 1 }} color="secondary.light">
        {/* 
          Categories
        */}
        <Box sx={{ paddingX: 3, paddingTop: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="p" sx={{ color: "black" }}>
              Categories
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ fontSize: { md: "0.9rem", xs: "0.8rem" } }}
            >
              <Link href="#" underline="none" color="unset">
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={0} sx={{ paddingX: { md: 1, xs: 0 } }}>
            {Categories.map((el, i) => (
              <Grid
                item
                key={i}
                md={2}
                xs={3}
                sx={{
                  display: i > 3 ? { xs: "none", md: "block" } : null,
                }}
              >
                <Box sx={{ marginTop: 2, marginBottom: 1 }}>
                  <Link href={`/posteredit/${i}`} underline="none">
                    <Paper
                      elevation={2}
                      sx={{
                        width: { md: "6rem", xs: "3.5rem" },
                        height: { md: "6rem", xs: "3.5rem" },
                        borderRadius: "50%",
                        padding: { md: 3, xs: 2 },
                        marginX: "auto",
                        fill: "white",
                        backgroundColor: el.color,
                      }}
                    >
                      {el.svg}
                    </Paper>
                  </Link>
                </Box>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    textAlign: "center",
                    fontSize: { md: "1.4rem", xs: "0.8rem" },
                    color: "gray",
                  }}
                >
                  {el.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* 
          Today
        */}
        <PosterCards
          heading="Today"
          list={ImagesArr.filter((_, i) => i < 4)}
          inc={0} //TODO only static
        />
        {/*
         Stories 
        */}
        <PosterCards
          heading="Stories"
          list={ImagesArr.filter((_, i) => i >= 4 && i < 8)}
          inc={4} //TODO only static
        />
        {/*
         Quotes
        */}
        <PosterCards
          heading="Quotes"
          list={ImagesArr.filter((_, i) => i >= 8 && i < 12)}
          inc={8} //TODO only static
        />
        {/*
         Tomorrow
        */}
        <PosterCards
          heading="Tomorrow"
          list={ImagesArr.filter((_, i) => i >= 12 && i < 16)}
          inc={12} //TODO only static
        />
      </Box>
    </main>
  );
};
export default Home;
