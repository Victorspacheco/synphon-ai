import * as React from "react"

type AvatarProps = {
  src?: string
  alt?: string
  fallback?: React.ReactNode
  className?: string
}

export function Avatar({ src, alt = "Avatar", fallback, className }: AvatarProps) {
  return (
    <div className={`relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
          {fallback || "?"}
        </div>
      )}
    </div>
  )
}
