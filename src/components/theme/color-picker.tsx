'use client'

import { useTheme } from '@/components/theme/theme-provider'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Paintbrush } from 'lucide-react'

// Predefined color options
const colorOptions = [
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Indigo', value: '#6366f1' },
]

export function ColorPicker() {
  const { color, setColor } = useTheme()
  
  // Handle color option selection
  const handleColorSelect = (colorValue: string) => {
    setColor(colorValue)
  }

  return (
    <Popover>
      <PopoverTrigger >
        <Button 
          variant="ghost" 
          size="icon" 
          aria-label="Change primary color"
          className="relative"
        >
          <Paintbrush className="h-5 w-5" />
          <span 
            className="absolute bottom-1 right-1 h-2 w-2 rounded-full" 
            style={{ backgroundColor: color }}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4" align="end">
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Theme Color</h4>
          
          {/* Color grid */}
          <div className="grid grid-cols-5 gap-2">
            {colorOptions.map((option) => (
              <button
                key={option.value}
                className={`h-6 w-6 rounded-full border ${
                  color === option.value ? 'ring-2 ring-ring ring-offset-2' : 'border-border'
                }`}
                style={{ backgroundColor: option.value }}
                onClick={() => handleColorSelect(option.value)}
                title={option.name}
                aria-label={`Select ${option.name} color`}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
} 