import { EarthGlobeIcon } from '@sanity/icons'

export default {
  name: 'portfolio',
  title: 'Portfolio',
  icon: EarthGlobeIcon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'coverImage',
      title: 'Background Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'dob',
      title: 'Date Of Birth',
      type: 'date'
    },
    {
      name: 'igurl',
      title: 'Instagram URL',
      type: 'url'
    },
    {
      name: 'twurl',
      title: 'Twitter URL',
      type: 'url'
    },
    {
      name: 'fburl',
      title: 'Facebook URL',
      type: 'url'
    },
    {
      name: 'lnurl',
      title: 'LinkedIn URL',
      type: 'url'
    },
    {
      name: 'giturl',
      title: 'GitHub URL',
      type: 'url'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profileImage'
    }
  }
}
