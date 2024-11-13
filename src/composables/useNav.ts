import { Slug, type NavItem } from '~/src/types/navs'

export function useNavs() {
  const navs: NavItem[] = [
    {
      title: 'Home',
    },
    {
      title: 'Margarita',
      slug: Slug.Margarita,
    },
    {
      title: 'Mojito',
      slug: Slug.Mojito,
    },
    {
      title: 'A1',
      slug: Slug.A1,
    },
    {
      title: 'Kir',
      slug: Slug.Kir,
    },
  ]

  return {
    navs,
  }
}
