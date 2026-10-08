// Data for Calorie Gym (Madurai)

export const programs = [
  {
    id: 1,
    title: "Strength & Bodybuilding",
    description: "Equipped with heavy-duty free weights, power racks, barbells, and plate-loaded selectorized machines for raw muscle growth.",
    icon: "Dumbbell"
  },
  {
    id: 2,
    title: "Dedicated Women's Section",
    description: "Spacious and private 2nd-floor facility designed specifically for women with specialized strength and toning equipment.",
    icon: "Users"
  },
  {
    id: 3,
    title: "Personal Training",
    description: "Tailored 1-on-1 coaching focusing on form, progressive overload, diet advice, and goal transformation.",
    icon: "UserCircle"
  },
  {
    id: 4,
    title: "Cardio & Calorie Burn Zone",
    description: "Modern treadmills, cycles, and endurance equipment to incinerate calories and maximize heart health.",
    icon: "Activity"
  }
];

export const schedule = [
  { day: "Monday", morning: "5:30 AM - 11:00 AM", evening: "4:00 PM - 9:00 PM", focus: "Chest & Triceps / Full Body" },
  { day: "Tuesday", morning: "5:30 AM - 11:00 AM", evening: "4:00 PM - 9:00 PM", focus: "Back & Biceps / Core" },
  { day: "Wednesday", morning: "5:30 AM - 11:00 AM", evening: "4:00 PM - 9:00 PM", focus: "Legs & Core Conditioning" },
  { day: "Thursday", morning: "5:30 AM - 11:00 AM", evening: "4:00 PM - 9:00 PM", focus: "Shoulders, Traps & Mobility" },
  { day: "Friday", morning: "5:30 AM - 11:00 AM", evening: "4:00 PM - 9:00 PM", focus: "Arms & Functional HIIT" },
  { day: "Saturday", morning: "5:30 AM - 11:00 AM", evening: "4:00 PM - 9:00 PM", focus: "Open Gym & Power Sessions" },
  { day: "Sunday", morning: "Rest Day", evening: "Rest Day", focus: "Recovery & Maintenance (Closed)" },
];

export const trainers = [
  {
    id: 1,
    name: "Head Coach & Trainer",
    specialty: "Hypertrophy & Strength Conditioning",
    bio: "Certified fitness trainer specializing in progressive overload, customized workout programming, and injury prevention.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Women's Fitness Coach",
    specialty: "Toning, Calisthenics & Weight Loss",
    bio: "Dedicated women's instructor offering step-by-step guidance, postpartum recovery, and fat-loss conditioning.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Functional & Cardio Specialist",
    specialty: "High-Intensity Endurance & Mobility",
    bio: "Focused on functional movement, agility drills, and cardio endurance to keep your cardiovascular system operating at its peak.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export const memberships = [
  {
    id: 1,
    name: "Monthly Gym Access",
    price: "₹500 / month",
    admission: "₹1,000 One-time Admission",
    features: [
      "Full access to 2nd Floor (Women) or 3rd Floor (Men)",
      "Modern weight lifting & cardio machines",
      "Locker & changing room facilities",
      "General trainer floor assistance",
      "Flexible workout hours (5:30 AM - 9:00 PM)"
    ],
    popular: true
  },
  {
    id: 2,
    name: "Quarterly Transformation",
    price: "₹1,400 / 3 months",
    admission: "Free Admission Included",
    features: [
      "All standard monthly benefits included",
      "Discounted bundled rate",
      "Body composition assessment",
      "Personalized beginner workout chart",
      "Nutrition & diet guidance"
    ],
    popular: false
  },
  {
    id: 3,
    name: "Personal Training Add-on",
    price: "Custom / plan",
    admission: "Consultation Free",
    features: [
      "1-on-1 dedicated coach attention",
      "Custom macro & meal planning",
      "Weekly progress & body metric checks",
      "Form correction & injury rehab support",
      "Priority equipment scheduling"
    ],
    popular: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Karthik R.",
    role: "Regular Member (1.5 Years)",
    text: "Best gym experience in the Madurai area. The separate floor for men and women ensures great comfort and focus. Machines are well-maintained and the community is super motivating!"
  },
  {
    id: 2,
    name: "Priya S.",
    role: "Member (8 Months)",
    text: "Having a dedicated 2nd floor exclusively for women makes a huge difference. I feel completely comfortable working out here every morning. Friendly atmosphere and great trainers!"
  },
  {
    id: 3,
    name: "Arun Kumar",
    role: "Powerlifter",
    text: "Great selection of free weights and heavy dumbbells. Timings from 5:30 AM to 9:00 PM make it super convenient for people with busy work schedules."
  }
];

export const gymDetails = {
  name: "Calorie",
  tagline: "Unisex Fitness & Calorie Burn Center",
  location: "Madurai",
  address: "Main Road, Madurai, Tamil Nadu, India",
  phone: "+91 90000 00000",
  email: "caloriegym@gmail.com",
  hours: {
    weekdays: "5:30 AM - 9:00 PM",
    saturday: "5:30 AM - 9:00 PM",
    sunday: "Closed (Rest Day)"
  },
  floors: {
    women: "2nd Floor: Dedicated Women's Zone",
    men: "3rd Floor: Men's Zone"
  },
  mapUrl: "https://maps.google.com/?q=Madurai,+Tamil+Nadu",
  googleMapsEmbed: "https://www.google.com/maps?q=Madurai,+Tamil+Nadu&output=embed",
  heroImage: "/bg.jpg",
  aboutImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    whatsapp: "dummy"
  }
};
