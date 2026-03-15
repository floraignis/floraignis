const modules = import.meta.glob(
  './assets/background/*.{jpg,jpeg,png,webp,avif,gif}',
  { eager: true }
)

export const backgroundImages = Object.values(modules).map((m) => m.default)