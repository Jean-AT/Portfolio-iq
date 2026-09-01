import { Hero } from '@/components/sections/hero'
import { Foundations } from '@/components/sections/foundations'
import { ComponentShowcase } from '@/components/sections/component-showcase'
import { ResourceTable } from '@/components/sections/resource-table'
import { FormDemo } from '@/components/sections/form-demo'

export default function Page() {
  return (
    <main id="main-content" className="page-main">
      <Hero />
      <Foundations />
      <ComponentShowcase />
      <ResourceTable />
      <FormDemo />
    </main>
  )
}
