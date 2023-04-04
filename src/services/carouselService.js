export const getCarouselImages = async () => {
  try {
  const response = await fetch('http://127.0.0.1:8000/carousel/carousel.php');
  const data = await response.json();
  return data;
  } catch (error) {
    console.error("Error fetching carousel images:", error);
  }
};