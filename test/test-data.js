

const data = {
  entities: [
    {
      id: 'RHSE',
      type: 'School',
      name: 'Rhumbl School of Science & Engineering'
    },
    {
      id: 'MATH',
      type: 'Department',
      name: 'Department of Mathematics'
    },
    {
      id: 'AERO',
      type: 'Department',
      name: 'Department of Aerospace Engineering'
    },
    {
      id: 'CS',
      type: 'Department',
      name: 'Department of Computer Science'
    },
    {
      id: 'CS1',
      type: 'Class',
      name: 'Intro to Computer Science'
    },
    {
      id: 'CS2',
      type: 'Class',
      name: 'Intro to Programming'
    },
    {
      id: 'CS3',
      type: 'Class',
      name: 'Algorithms'
    },
    {
      id: 'CS4',
      type: 'Class',
      name: 'Software Engineering I'
    },

    // MATH classes
    {
      id: 'MATH1',
      type: 'Class',
      name: 'Calculus I'
    },
    {
      id: 'MATH2',
      type: 'Class',
      name: 'Calculus II'
    },
    {
      id: 'MATH3',
      type: 'Class',
      name: 'Probability & Statistics'
    },

    // AERO classes
    {
      id: 'AERO1',
      type: 'Class',
      name: 'Introduction to Design'
    },
    {
      id: 'AERO2',
      type: 'Class',
      name: 'Structural Mechanics'
    },
    {
      id: 'AERO3',
      type: 'Class',
      name: 'Thermodynamics'
    },
    {
      id: 'AERO4',
      type: 'Class',
      name: 'Fluid Mechanics'
    },
    {
      id: 'AERO5',
      type: 'Class',
      name: 'Aerodynamics'
    },
    {
      id: 'AERO6',
      type: 'Class',
      name: 'Aerospace Controls'
    },
    {
      id: 'AERO7',
      type: 'Class',
      name: 'Aerospace Propulsion'
    }
  ],
  relationships: [
    {
      id: 'CS1-HAS_PARENT_OF-CS',
      type: 'HAS_PARENT_OF',
      sourceId: 'CS1',
      targetId: 'CS'
    },
    {
      id: 'CS2-HAS_PARENT_OF-CS',
      type: 'HAS_PARENT_OF',
      sourceId: 'CS2',
      targetId: 'CS'
    },
    {
      id: 'CS3-HAS_PARENT_OF-CS',
      type: 'HAS_PARENT_OF',
      sourceId: 'CS3',
      targetId: 'CS'
    },
    {
      id: 'CS4-HAS_PARENT_OF-CS',
      type: 'HAS_PARENT_OF',
      sourceId: 'CS4',
      targetId: 'CS'
    },
    {
      id: 'MATH1-HAS_PARENT_OF-MATH',
      type: 'HAS_PARENT_OF',
      sourceId: 'MATH1',
      targetId: 'MATH'
    },
    {
      id: 'MATH2-HAS_PARENT_OF-MATH',
      type: 'HAS_PARENT_OF',
      sourceId: 'MATH2',
      targetId: 'MATH'
    },
    {
      id: 'MATH3-HAS_PARENT_OF-MATH',
      type: 'HAS_PARENT_OF',
      sourceId: 'MATH3',
      targetId: 'MATH'
    },

    // AERO classes parent relationships
    {
      id: 'AERO1-HAS_PARENT_OF-AERO',
      type: 'HAS_PARENT_OF',
      sourceId: 'AERO1',
      targetId: 'AERO'
    },
    {
      id: 'AERO2-HAS_PARENT_OF-AERO',
      type: 'HAS_PARENT_OF',
      sourceId: 'AERO1',
      targetId: 'AERO'
    },
    {
      id: 'AERO3-HAS_PARENT_OF-AERO',
      type: 'HAS_PARENT_OF',
      sourceId: 'AERO1',
      targetId: 'AERO'
    },
    {
      id: 'AERO4-HAS_PARENT_OF-AERO',
      type: 'HAS_PARENT_OF',
      sourceId: 'AERO1',
      targetId: 'AERO'
    },
    {
      id: 'AERO5-HAS_PARENT_OF-AERO',
      type: 'HAS_PARENT_OF',
      sourceId: 'AERO1',
      targetId: 'AERO'
    },
    {
      id: 'AERO6-HAS_PARENT_OF-AERO',
      type: 'HAS_PARENT_OF',
      sourceId: 'AERO6',
      targetId: 'AERO'
    },
    {
      id: 'AERO7-HAS_PARENT_OF-AERO',
      type: 'HAS_PARENT_OF',
      sourceId: 'AERO7',
      targetId: 'AERO'
    },

    // REQUIRES type of relationship
    {
      id: 'CS3-REQUIRES-CS1',
      type: 'REQUIRES',
      sourceId: 'CS3',
      targetId: 'CS1'
    },
    {
      id: 'CS4-REQUIRES-CS2',
      type: 'REQUIRES',
      sourceId: 'CS4',
      targetId: 'CS2'
    },
    {
      id: 'CS4-REQUIRES-CS3',
      type: 'REQUIRES',
      sourceId: 'CS4',
      targetId: 'CS3'
    },

    {
      id: 'MATH2-REQUIRES-MATH1',
      type: 'REQUIRES',
      sourceId: 'MATH2',
      targetId: 'MATH1'
    },
    {
      id: 'MATH3-REQUIRES-MATH1',
      type: 'REQUIRES',
      sourceId: 'MATH3',
      targetId: 'MATH1'
    },

    {
      id: 'AERO2-REQUIRES-MATH2',
      type: 'REQUIRES',
      sourceId: 'AERO2',
      targetId: 'MATH2'
    },
    {
      id: 'AERO3-REQUIRES-MATH2',
      type: 'REQUIRES',
      sourceId: 'AERO3',
      targetId: 'MATH2'
    },
    {
      id: 'AERO4-REQUIRES-MATH2',
      type: 'REQUIRES',
      sourceId: 'AERO4',
      targetId: 'MATH2'
    },
    {
      id: 'AERO5-REQUIRES-AERO3',
      type: 'REQUIRES',
      sourceId: 'AERO5',
      targetId: 'AERO3'
    },
    {
      id: 'AERO5-REQUIRES-AERO4',
      type: 'REQUIRES',
      sourceId: 'AERO5',
      targetId: 'AERO4'
    },
  ]
}

export default data
