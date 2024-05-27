'use client';
import { useState } from 'react';
export default function DashboardPage() {
  console.log('first');
  const [name, setName] = useState('');
  return (
    <div>
      <h1>DashboardPage</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}!</p>
    </div>
  );
}
