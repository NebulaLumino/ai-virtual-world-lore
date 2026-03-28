"use client";

import { useState } from "react";
import { generateText } from "ai";
import { deepseek } from "@ai-sdk/deepseek";

export default function VirtualWorldLorePage() {
  const [formData, setFormData] = useState({
    worldType: "",
    genre: "",
    tone: "",
    scope: "",
    primaryTheme: "",
    historicalPeriod: "",
    culturalInfluence: "",
    additionalNotes: "",
  });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");

    try {
      const { text } = await generateText({
        model: deepseek("deepseek-chat"),
        prompt: `You are an expert worldbuilder, fantasy novelist, and narrative designer. Create a comprehensive virtual world lore and mythology document based on the following specifications:

- World Type: ${formData.worldType}
- Genre: ${formData.genre}
- Tone: ${formData.tone}
- Narrative Scope: ${formData.scope}
- Primary Theme: ${formData.primaryTheme}
- Historical Period / Era: ${formData.historicalPeriod}
- Cultural Influences: ${formData.culturalInfluence}
- Additional Notes: ${formData.additionalNotes}

Provide a rich worldbuilding document including:
1. World Overview & Creation Myth
2. Cosmology (gods, cosmology, metaphysics, magic system)
3. Major Factions & Political Powers
4. Geography & Notable Locations
5. Historical Timeline (major ages, events, cataclysms)
6. Pantheon / Divine Beings & Their Myths
7. Races / Species & Their Origins
8. Cultural Practices, Languages & Art
9. Technology & Magic System (rules, limitations, costs)
10. Legends, Prophecies & Unsolved Mysteries
11. Hidden Secrets & Easter Eggs for explorers
12. Thematic Resonance & Player/Member Experience

Format with clear markdown headers, rich narrative prose, bullet points, and occasional in-world quotes or excerpts.`,
      });
      setOutput(text);
    } catch {
      setOutput("Error generating world lore. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3">
            Virtual World Lore & Mythology Generator
          </h1>
          <p className="text-slate-400 text-lg">
            Build rich lore, mythologies, and histories for virtual worlds and games
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-5 text-amber-300">World Parameters</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">World Type</label>
                <select name="worldType" value={formData.worldType} onChange={handleChange} required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-amber-400 focus:outline-none">
                  <option value="">Select type...</option>
                  <option value="Flat World (Disk)">Flat World (Disk / Terra Australis)</option>
                  <option value="Floating Islands">Floating Islands / Sky World</option>
                  <option value="Underwater Civilization">Underwater Civilization</option>
                  <option value="Ring World">Ring World / Dyson Shell</option>
                  <option value="Continent-scale">Continent-scale (Single landmass)</option>
                  <option value="Archipelago">Archipelago (Island chain)</option>
                  <option value="Dimensional / Multi-plane">Dimensional / Multi-plane</option>
                  <option value="Virtual / Simulated">Virtual / Simulated Reality</option>
                  <option value="Post-apocalyptic Earth">Post-apocalyptic Earth</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Genre</label>
                <select name="genre" value={formData.genre} onChange={handleChange} required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-amber-400 focus:outline-none">
                  <option value="">Select genre...</option>
                  <option value="High Fantasy">High Fantasy (Tolkien-esque)</option>
                  <option value="Dark Fantasy">Dark Fantasy (grim, horror-influenced)</option>
                  <option value="Sword & Sorcery">Sword & Sorcery</option>
                  <option value="Space Opera">Space Opera</option>
                  <option value="Cyberpunk / Neon Noir">Cyberpunk / Neon Noir</option>
                  <option value="Science Fantasy">Science Fantasy (blend)</option>
                  <option value="Mythological">Mythological (Greek, Norse, Egyptian)</option>
                  <option value="Steampunk">Steampunk / Dieselpunk</option>
                  <option value="Cosmic Horror">Cosmic Horror</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Tone</label>
                <select name="tone" value={formData.tone} onChange={handleChange} required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-amber-400 focus:outline-none">
                  <option value="">Select tone...</option>
                  <option value="Epic / Heroic">Epic / Heroic</option>
                  <option value="Mysterious / Enigmatic">Mysterious / Enigmatic</option>
                  <option value="Grim / Tragic">Grim / Tragic</option>
                  <option value="Whimsical / Light">Whimsical / Light</option>
                  <option value="Melancholic / Bittersweet">Melancholic / Bittersweet</option>
                  <option value="Uplifting / Hopeful">Uplifting / Hopeful</option>
                  <option value="Dark / Ominous">Dark / Ominous</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Narrative Scope</label>
                <select name="scope" value={formData.scope} onChange={handleChange} required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-amber-400 focus:outline-none">
                  <option value="">Select scope...</option>
                  <option value="Single Village / Town">Single Village / Town</option>
                  <option value="Kingdom / Nation">Kingdom / Nation</option>
                  <option value="Continent">Continent</option>
                  <option value="Planet / World">Planet / World</option>
                  <option value="Galaxy / Universe">Galaxy / Universe</option>
                  <option value="Multi-dimensional">Multi-dimensional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Primary Theme</label>
                <input type="text" name="primaryTheme" value={formData.primaryTheme} onChange={handleChange} required
                  placeholder="e.g., The cyclical nature of power, loss of innocence"
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Historical Period / Era</label>
                <select name="historicalPeriod" value={formData.historicalPeriod} onChange={handleChange} required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-amber-400 focus:outline-none">
                  <option value="">Select period...</option>
                  <option value="Pre-civilization (Tribal)">Pre-civilization (Tribal)</option>
                  <option value="Ancient (Egyptian/Greek/Roman style)">Ancient (Egyptian/Greek/Roman)</option>
                  <option value="Medieval">Medieval (Feudal)</option>
                  <option value="Renaissance">Renaissance</option>
                  <option value="Early Modern (Age of Sail)">Early Modern (Age of Sail)</option>
                  <option value="Industrial Revolution">Industrial Revolution</option>
                  <option value="Modern / Near-future">Modern / Near-future</option>
                  <option value="Distant Future">Distant Future</option>
                  <option value="Timeless / Mythical">Timeless / Mythical (no fixed period)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Cultural Influences</label>
                <input type="text" name="culturalInfluence" value={formData.culturalInfluence} onChange={handleChange}
                  placeholder="e.g., Japanese Shinto, West African mythology, Viking Norse"
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Additional Notes</label>
                <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows={3}
                  placeholder="Existing lore to avoid, tone constraints, forbidden topics..."
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none resize-none" />
              </div>

              <button type="submit" disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50">
                {loading ? "Generating..." : "Generate World Lore"}
              </button>
            </form>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-5 text-orange-300">Generated Lore</h2>
            <div className="bg-slate-900/70 rounded-xl p-4 min-h-[500px] max-h-[600px] overflow-y-auto">
              {output ? (
                <div className="prose prose-invert prose-sm max-w-none whitespace-pre-wrap">
                  {output.split("\n").map((line, i) => {
                    if (line.startsWith("# ")) return <h1 key={i} className="text-xl font-bold text-amber-300 mt-4 mb-2">{line.slice(2)}</h1>;
                    if (line.startsWith("## ")) return <h2 key={i} className="text-lg font-semibold text-orange-300 mt-3 mb-2">{line.slice(3)}</h2>;
                    if (line.startsWith("### ")) return <h3 key={i} className="text-md font-semibold text-white mt-2 mb-1">{line.slice(4)}</h3>;
                    if (line.startsWith("- ")) return <li key={i} className="text-slate-300 ml-4">{line.slice(2)}</li>;
                    if (line.startsWith(">")) return <blockquote key={i} className="border-l-4 border-amber-600 pl-4 italic text-amber-200">{line.slice(1)}</blockquote>;
                    if (line.trim() === "") return <br key={i} />;
                    return <p key={i} className="text-slate-300">{line}</p>;
                  })}
                </div>
              ) : (
                <p className="text-slate-500 italic">Your world lore and mythology will appear here...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
