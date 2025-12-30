import React from 'react';

export type PageView = 'home' | 'generate' | 'results' | 'contact';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface ThumbnailData {
  id: string;
  imageUrl: string;
  title: string;
  style: string;
  score: number;
  font: string;
}

export interface GenerationConfig {
  prompt: string;
  style: string;
  uploadedImage: File | null;
}