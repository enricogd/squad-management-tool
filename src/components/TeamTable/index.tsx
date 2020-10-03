import React from 'react'
import SectionTemplate from 'templates/SectionTemplate'

export default function TeamTable() {
  return (
    <SectionTemplate title="My Teams" onClick={() => {}}>
      <button>add team</button>
      <table>
        <thead>
          <td>name</td>
          <td>description</td>
        </thead>
        <tbody>
          <td>ss</td>
          <td>aa</td>
        </tbody>
      </table>
    </SectionTemplate>
  )
}
