import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Insert Gemini API Logic Here
    
    // Artificial delay to simulate processing and show the skeleton loader
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Fixed mock recipe response
    const mockRecipe = {
      reasoning: "This Mediterranean-inspired bowl is optimized for your Muscle Recovery goal. It provides a dense profile of bioavailable proteins and magnesium-rich greens to support tissue repair after your morning workout, while maintaining the caloric deficit you requested.",
      tags: ["Breakfast", "High Protein", "Low Carb"],
      title: "Smoked Salmon & Quinoa Power Bowl",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp2_1SiukdFlm21GPO15pJ9G9NFnsggIb_gEeCaLsYR-jRO19ecA--tpfMMCBz5vvMHlBqrwrrXuzRWSCPHb11_VV3AL_tOeOgrqgnkpJYpnGOaPIlb9Xq-QWy78hObZilBNZ701VhvUc3gnHbJCkHaliFc7wCeSWRMqfpqebXg_VhXOeO1CryoDkZZsd6s95mISBl-6fUOjVMsIJK65yWGynRw0qFQeHsqmHTBb8-HT10ZS7RU7FfQfRNzpDZ_UzIaLYe6P3hIA",
      time: 15,
      servings: 1,
      nutrition: {
        calories: 385,
        protein: 32,
        carbs: 24,
        fat: 18
      },
      ingredients: [
        "100g Smoked Salmon",
        "1/2 cup Cooked Quinoa",
        "1/2 Fresh Avocado",
        "Handful Baby Spinach",
        "1 Poached Egg",
        "Lemon & Olive Oil"
      ],
      preparation: [
        "Base the bowl with a generous bed of fresh baby spinach and lukewarm cooked quinoa.",
        "Artfully arrange the smoked salmon slices and sliced avocado atop the base.",
        "Place the perfectly poached egg in the center. Drizzle with cold-pressed olive oil and a squeeze of fresh lemon.",
        "Season with a pinch of sea salt and cracked black pepper to taste."
      ]
    };

    return NextResponse.json(mockRecipe);
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
