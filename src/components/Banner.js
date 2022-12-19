import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/img/1.png";
import image1 from "../assets/img/2.png";
import image2 from "../assets/img/3.png";

function Header() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image} width="200px"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1} width="200px"
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2} width="200px"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
}

export default Header;