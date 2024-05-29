"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAnimeResponse } from "@/libs/api";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import ReactLoading from "react-loading";
import Select from "react-select";

// Define the genre options
const genreOptions = [
  { value: 1, label: "Action" },
  { value: 2, label: "Adventure" },
  { value: 3, label: "Racing" },
  { value: 4, label: "Comedy" },
  { value: 5, label: "Avant Garde" },
  { value: 6, label: "Mythology" },
  { value: 7, label: "Mystery" },
  { value: 8, label: "Drama" },
  { value: 9, label: "Ecchi" },
  { value: 10, label: "Fantasy" },
  { value: 11, label: "Strategy" },
  { value: 12, label: "Hentai" },
  { value: 13, label: "Historical" },
  { value: 14, label: "Horror" },
  { value: 15, label: "Kids" },
  { value: 17, label: "Martial Arts" },
  { value: 18, label: "Mecha" },
  { value: 19, label: "Music" },
  { value: 20, label: "Parody" },
  { value: 21, label: "Samurai" },
  { value: 22, label: "Romance" },
  { value: 23, label: "School" },
  { value: 24, label: "Sci-Fi" },
  { value: 25, label: "Shoujo" },
  { value: 26, label: "Girls Love" },
  { value: 27, label: "Shounen" },
  { value: 28, label: "Boys Love" },
  { value: 29, label: "Space" },
  { value: 30, label: "Sports" },
  { value: 31, label: "Super Power" },
  { value: 32, label: "Vampire" },
  { value: 35, label: "Harem" },
  { value: 36, label: "Slice of Life" },
  { value: 37, label: "Supernatural" },
  { value: 38, label: "Military" },
  { value: 39, label: "Detective" },
  { value: 40, label: "Psychological" },
  { value: 41, label: "Suspense" },
  { value: 42, label: "Seinen" },
  { value: 43, label: "Josei" },
  { value: 46, label: "Award Winning" },
  { value: 47, label: "Gourmet" },
  { value: 48, label: "Workplace" },
  { value: 49, label: "Erotica" },
  { value: 50, label: "Adult Cast" },
  { value: 51, label: "Anthropomorphic" },
  { value: 52, label: "CGDCT" },
  { value: 53, label: "Childcare" },
  { value: 54, label: "Combat Sports" },
  { value: 55, label: "Delinquents" },
  { value: 56, label: "Educational" },
  { value: 57, label: "Gag Humor" },
  { value: 58, label: "Gore" },
  { value: 59, label: "High Stakes Game" },
  { value: 60, label: "Idols (Female)" },
  { value: 61, label: "Idols (Male)" },
  { value: 62, label: "Isekai" },
  { value: 63, label: "Iyashikei" },
  { value: 64, label: "Love Polygon" },
  { value: 65, label: "Magical Sex Shift" },
  { value: 66, label: "Mahou Shoujo" },
  { value: 67, label: "Medical" },
  { value: 68, label: "Organized Crime" },
  { value: 69, label: "Otaku Culture" },
  { value: 70, label: "Performing Arts" },
  { value: 71, label: "Pets" },
  { value: 72, label: "Reincarnation" },
  { value: 73, label: "Reverse Harem" },
  { value: 74, label: "Romantic Subtext" },
  { value: 75, label: "Showbiz" },
  { value: 76, label: "Survival" },
  { value: 77, label: "Team Sports" },
  { value: 78, label: "Time Travel" },
  { value: 79, label: "Video Game" },
  { value: 80, label: "Visual Arts" },
  { value: 81, label: "Crossdressing" },
];

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const startYear = searchParams.get("startYear") || "";
  const endYear = searchParams.get("endYear") || "";
  const genre = searchParams.get("genre") || "";
  const minScore = searchParams.get("minScore") || "";
  const status = searchParams.get("status") || "";
  const rating = searchParams.get("rating") || "";

  // State for storing search results
  const [searchAnime, setSearchAnime] = useState(null);
  // State for managing loading indicator
  const [isLoading, setIsLoading] = useState(true);
  // State for selected genres
  const [selectedGenres, setSelectedGenres] = useState(
    genre
      ? genre
          .split(",")
          .map((id) =>
            genreOptions.find((option) => option.value === parseInt(id))
          )
      : []
  );

  useEffect(() => {
    async function fetchAnime() {
      setIsLoading(true); // Start loading

      // Construct the query string
      let query = "";
      if (keyword) query += `q=${keyword}`;
      if (startYear) query += `&start_date=${startYear}-01-01`;
      if (endYear) query += `&end_date=${endYear}-12-31`;
      if (genre) query += `&genres=${genre}`;
      if (minScore) query += `&min_score=${minScore}`;
      if (status) query += `&status=${status}`;
      if (rating) query += `&rating=${rating}`;

      const result = await getAnimeResponse("anime", query);
      setSearchAnime(result); // Set search results
      setIsLoading(false); // End loading
    }

    fetchAnime();
  }, [keyword, startYear, endYear, genre, minScore, status, rating]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const keyword = form.keyword.value.trim();
    const startYear = form.startYear.value.trim();
    const endYear = form.endYear.value.trim();
    const genre = selectedGenres.map((option) => option.value).join(",");
    const minScore = form.minScore.value.trim();
    const status = form.status.value.trim();
    const rating = form.rating.value.trim();

    // Update the URL with query parameters
    const query = new URLSearchParams();
    if (keyword) query.set("keyword", keyword);
    if (startYear) query.set("startYear", startYear);
    if (endYear) query.set("endYear", endYear);
    if (genre) query.set("genre", genre);
    if (minScore) query.set("minScore", minScore);
    if (status) query.set("status", status);
    if (rating) query.set("rating", rating);
    router.push(`/search?${query.toString()}`);
  };

  return (
    <>
      <Header title={`Hasil Pencarian: ${keyword || "All Anime"}`} />
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center p-4 mx-auto my-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 max-w-screen-2xl"
      >
        <input
          name="keyword"
          type="text"
          placeholder="Cari judul..."
          defaultValue={keyword}
          className="w-full p-2 border rounded border-color-orange sm:w-1/4"
        />
        <input
          name="startYear"
          type="number"
          placeholder="Start Year"
          defaultValue={startYear}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        />
        <input
          name="endYear"
          type="number"
          placeholder="End Year"
          defaultValue={endYear}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        />
        <Select
          name="genre"
          isMulti
          options={genreOptions}
          value={selectedGenres}
          onChange={setSelectedGenres}
          className="w-full sm:w-1/2"
        />
        <input
          name="minScore"
          type="number"
          placeholder="Min Score"
          step="1"
          min="0"
          max="10"
          defaultValue={minScore}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        />
        <select
          name="status"
          defaultValue={status}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        >
          <option value="">Any Status</option>
          <option value="airing">Airing</option>
          <option value="complete">Complete</option>
          <option value="upcoming">Upcoming</option>
        </select>
        <select
          name="rating"
          defaultValue={rating}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        >
          <option value="">Any Rating</option>
          <option value="g">G - All Ages</option>
          <option value="pg">PG - Children</option>
          <option value="pg13">PG-13 - Teens 13 or older</option>
          <option value="r17">R - 17+ (violence & profanity)</option>
          <option value="r">R+ - Mild Nudity</option>
          <option value="rx">Rx - Hentai</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 rounded text-color-secondary bg-color-orange sm:w-1/6"
        >
          Search
        </button>
      </form>
      {isLoading ? (
        <div className="flex items-center justify-center h-1/4">
          <ReactLoading type="spin" color="#FEDD89" height="5%" width="5%" />
        </div>
      ) : (
        <AnimeList api={searchAnime} />
      )}
    </>
  );
}
