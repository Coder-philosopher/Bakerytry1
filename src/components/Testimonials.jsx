import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Pastry Enthusiast",
    quote: "The best bakery in town! Their croissants are to die for.",
    image:
      "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image URL
  },
  {
    id: 2,
    name: "Liam Smith",
    role: "Food Blogger",
    quote:
      "Their pastries are not just delicious but also beautifully presented.",
    image:
      "https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image URL
  },
  {
    id: 3,
    name: "Sophia Brown",
    role: "Culinary Expert",
    quote: "If you haven’t tried their sourdough bread, you are missing out!",
    image:
      "https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image URL
  },
  {
    id: 4,
    name: "Noah Wilson",
    role: "Dessert Lover",
    quote: "The variety of cakes is unbelievable. I can never choose just one!",
    image:
      "https://images.pexels.com/photos/1085517/pexels-photo-1085517.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image URL
  },
  {
    id: 5,
    name: "Isabella Martinez",
    role: "Local Guide",
    quote: "A perfect blend of traditional baking with a modern twist.",
    image:
      "https://images.pexels.com/photos/2531093/pexels-photo-2531093.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image URL
  },
  {
    id: 6,
    name: "Mason Taylor",
    role: "Coffee Connoisseur",
    quote: "Their bakery pairs perfectly with their specialty coffee blends.",
    image:
      "https://images.pexels.com/photos/674685/pexels-photo-674685.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image URL
  },
  {
    id: 7,
    name: "Olivia Garcia",
    role: "Cake Designer",
    quote: "I always look to this bakery for inspiration for my own designs.",
    image:
      "https://images.pexels.com/photos/3756785/pexels-photo-3756785.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image URL
  },
  {
    id: 8,
    name: "Elijah Davis",
    role: "Sweet Tooth",
    quote: "From cookies to cakes, everything here is exceptional.",
    image:
      "https://images.pexels.com/photos/3030332/pexels-photo-3030332.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder image URL
  },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`p-6 shadow-lg rounded-lg ${
            index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"
          }`}
        >
          {/* Different image styles based on index */}
          <div
            className={`w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ${
              index % 3 === 0 ? "shadow-xl" : ""
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Testimonial Text */}
          <p className="text-lg italic text-center mb-4">
            "{testimonial.quote}"
          </p>

          {/* Name and Role */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>

          {/* Additional Styling Changes */}
          {index % 2 === 0 ? (
            <div className="border-t mt-4 pt-2 text-center">
              <button className="text-sm text-[#7f6137] hover:underline">
                View More
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
