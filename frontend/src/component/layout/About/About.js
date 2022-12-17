import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://i0.wp.com/topnoithat.com/wp-content/uploads/2021/06/logo_noi_that_gia_vu.jpg?resize=850%2C491&ssl=1"
              alt="Founder"
            />
            <Typography>Đồ Nội Thất Gia Vũ</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            Theo các chuyên gia có kinh nghiệm lâu năm trong lĩnh vực thiết kế nội thất thì nội thất được định nghĩa là từ chỉ chung về cách mà bạn bố trí không gian cho ngôi nhà bằng các vật dụng ở bên trong của công trình, tức là các căn hộ, biệt thự,… Ở đây, bản thân của nội thất đã được bao gồm luôn phần không gian. Chính vì vậy, nội thất shop thời trang cũng sẽ có những yêu cầu riêng biệt khác với nội thất trong nhà ở.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            {/* <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
