import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

interface RestaurantSuggestion {
  name: string;
  count: number;
  lastSuggested: string;
  timestamps: string[];
}

interface SuggestionsData {
  [key: string]: RestaurantSuggestion;
}

const SUGGESTIONS_FILE = path.join(process.cwd(), 'data', 'restaurant-suggestions.json');

export async function GET() {
  try {
    if (!existsSync(SUGGESTIONS_FILE)) {
      return NextResponse.json({ suggestions: [], total: 0 });
    }

    const data = await readFile(SUGGESTIONS_FILE, 'utf-8');
    const suggestions: SuggestionsData = JSON.parse(data);

    // Convert to array and sort by count (highest first), then by latest suggestion
    const suggestionArray = Object.values(suggestions).sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count; // Sort by count (descending)
      }
      return new Date(b.lastSuggested).getTime() - new Date(a.lastSuggested).getTime(); // Then by date
    });

    const totalSuggestions = suggestionArray.reduce((sum, item) => sum + item.count, 0);

    return NextResponse.json({
      suggestions: suggestionArray,
      total: totalSuggestions,
      uniqueVenues: suggestionArray.length
    });
  } catch (error) {
    console.error('Error loading suggestions:', error);
    return NextResponse.json(
      { error: 'Failed to load suggestions' },
      { status: 500 }
    );
  }
}
