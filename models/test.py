from PIL import Image

# Open an image file
image_path = "/Users/rusiru_kalu/Downloads/istockphoto-488160041-612x612.jpg"  # Replace with your image path
image = Image.open(image_path)

# Convert the image to grayscale
grayscale_image = image.convert("L")

# Save the grayscale image
grayscale_image.save("grayscale_image.jpg")

# Optionally, show the image
grayscale_image.show()
