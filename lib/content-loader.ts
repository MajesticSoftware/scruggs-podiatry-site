import fs from 'fs';
import path from 'path';

export interface PageContent {
  title: string;
  content: string;
  preview: string;
  wordCount: number;
}

export interface ContentMap {
  [key: string]: PageContent;
}

export function loadContent(filename: string): string {
  try {
    const contentPath = path.join(process.cwd(), 'content', `${filename}.txt`);
    return fs.readFileSync(contentPath, 'utf-8');
  } catch (error) {
    console.error(`Error loading content for ${filename}:`, error);
    return '';
  }
}

export function loadAllContent(): ContentMap {
  try {
    const allContentPath = path.join(process.cwd(), 'content', 'all-content.json');
    const content = fs.readFileSync(allContentPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error loading all content:', error);
    return {};
  }
}

export function getContentMap(): any[] {
  try {
    const contentMapPath = path.join(process.cwd(), 'content', 'content-map.json');
    const content = fs.readFileSync(contentMapPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error loading content map:', error);
    return [];
  }
}
