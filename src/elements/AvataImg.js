import React from 'react';
import styled from 'styled-components';

const Avata = (props) => {
  const {
    src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPCg4NDQ0PDQ8NDgoPDg4QDQ8NDg0SFREWFhURExMYHSggGBslGxMTITEhJSkrLi4uIx8zODMtNygtLisBCgoKDg0OGBAPFyseHR83LSstNy4rKy0rLS0tNy0rLS0tLSs3LSsrLy0tKy0tNys3Ky0tLSsrKys3KysrNystK//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAAAQUCAwQG/8QAMRABAAIAAwUFBwQDAAAAAAAAAAECAwQRBRIhMUEyUVJhcSJygZGhscEzQpLRFCPh/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAHhEBAQEBAAMAAwEAAAAAAAAAAAECEQMxQRIhURP/2gAMAwEAAhEDEQA/APWIEvovmoEoFEgIAAAAAAAAAAAAAAgSgAAASgAABIAhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAVKAAShIAAgAAAAAAAAAAACABQAAAAABKAQAFAAEoSAAIAAAADKmHNp0rEz6Rq31yGJP7Yj1mE7Fktcw6p2fid0T8WjEwbV7VZj4cPmdhysAFQABAAoAAAAAAAIACgACUJAAEAAIjoscrs/rifx/tns7K6Rv2jjPLyh2stb+RrnH2orWIjSIiI7oSDNqEgDjzOQrbjT2Z7v2z/SrvWazMTGkx0egc2dy2/XWO1HLz8mmd/wBZ6x9inAaskAAAAAAAAACAAoAAlCQABBuyeFv4sR05z6Q0rDZNeN7e7DnV5HWZ2rEBg9AAAAAACo2lhbuLrHK3H49XKtNq1/1xPdb7qtvi9jDU5UAOnIAAAAAAAAAAAAlCQABBZ7J7F/ej7Kx3bKvpe1fFETHwc79O8e1mAwbgAAAAAOXaf6M+tVQstrX9mte+ZlWtsemG/aAHbkAAAAAAAEABQABKEgACDLCxJreLR0liCr/DvFqxaOUwyU+SzW5Ok8azz8vNb1tExrE6xPVhrPG+ddSA5dAABM6RrPKBV5/Ob3sU7PWfF/xZOuda4581jb+JNunKPRqBuwQAoAAAAAAACAAoAAlCQABAABtwMxak+zPDrE8pahFWuFtGs9qJrPzh0VzFJ5Xr84USHNxHc8lX841Y53r/AChoxc/SOU70+X9qdKf5wvkrfmM3a/Ds17o/LQDuTji3oAqIAFAAAAAAABAAUAAShIAAgN2Xy1sSeHCOtp5LPAydKdN6e+XN1I7mbVZhZS9uVdI754Q68PZniv8AKFgM7utJ445a7Pw46TPrLOMnh+CPq3jntdfjGn/Ew/BH1YWyGHPSY9Jl0h2n4xX4mzI/bf5xq5cXJ3rzrrHfHFdDqbrm4jzwusfKUvzjSfFHCVZmcranPjXxR+Wk1KzuLHOA6cgAAAAAAAgAKAAJQkB15LJ7/tW4V7utmORy2/bWezXn5+S4iO5nvXP1HeM9/dKxERpEaRHQBk2AAAAAAAACY1jSQBV57I7ut6cusdzhejVG0MruTvV7M9PDLXOvlZaz9jjAaMwAAAAAQAFAAGVKTa0VjnM6MVhsrC1tN56cI9Ut5Fk7Xfg4cUpFY6fXzZg870AAAAAAAAAAAAJY4lItWazymNJZAjz+PhTS81np9YYLPa2F7MXjpwn0VjfN7GGpygDpAAAAQAkUAAXeRpu4NfPjPxUkQ9FWNIiO6Ihn5GnjgAyagAAAAAAAAAAAJAEYY9N7DtXviXn3o3n8xXTEtHda33aeOs9sAGrMAAAEABQAGWF26+9X7vQvPYXbr71fu9Cy8jXxoAZtAAAAAAAAAAAAEgCCizv61/X8L1R579e/r+Gnj9uN+mgBqyAAABH/2Q==',
  } = props;

  const styles = {
    src: src,
  };

  return (
    <React.Fragment>
      <CircleImg {...styles}></CircleImg>
    </React.Fragment>
  );
};

const CircleImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
`;

export default Avata;
