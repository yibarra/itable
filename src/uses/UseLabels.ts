import { useCallback } from 'react';

// use dimension
const UseLabels = () => {
  // get label
  const getLabel = useCallback((label: string) => {
    switch (label) {
      case 'atomicMass':
        return {
          name: 'Atomic Mass',
          label: 'Masa Atómica'
        };
      case 'atomicNumber':
        return {
          name: 'Atomic Number',
          label: 'Numero Atómico'
        };
      case 'electronegativity':
        return {
          name: 'Electro-Negativity',
          label: 'Electronegatividad'
        };
      case 'name':
        return {
          name: 'Name',
          label: 'Nombre'
        };
      case 'electronicConfiguration':
        return {
          name: 'E Config',
          label: 'Config. Electronica'
        };
      case 'ionizationEnergy':
        return {
          name: 'Ionization Energy',
          label: 'Energía Ionización'
        };
      case 'oxidationStates':
        return {
          name: 'Oxidation States',
          label: 'Estados Oxidación'
        };
      case 'boilingPoint':
        return {
          name: 'Boiling Point',
          label: 'Punto Ebullición'
        };
      case 'bondingType':
        return {
          name: 'Bonding Type',
          label: 'Tipo Vinculación'
        };
      case 'density':
        return {
          name: 'Density',
          label: 'Densidad'
        };
      case 'electronAffinity':
        return {
          name: 'Electron Affinity',
          label: 'Afinidad Electronica'
        };
      case 'period':
        return {
          name: 'Period',
          label: 'Período'
        };
      case 'groupBlock':
        return {
          name: 'Group Block',
          label: 'Bloque Grupo'
        };
      case 'ionRadius':
        return {
          name: 'Ion Radius',
          label: 'Radio de Iones'
        };
      case 'standardState':
        return {
          name: 'Standard State',
          label: 'Estado Estándar'
        };
      case 'meltingPoint':
        return {
          name: 'Melting Point',
          label: 'Punto Fusion'
        };
      default: 
        return false;
    }
  }, []);

  // get label block
  const getLabelBlock = useCallback((label: string) => {
    switch (label) {
      case 'atomicMass':
        return {
          name: 'Atomic Mass',
          label: 'Masa Atómica'
        };
      case 'atomicNumber':
        return {
          name: 'Atomic Number',
          label: 'Numero Atómica'
        };
      case 'electronegativity':
        return {
          name: 'Electro-Negativity',
          label: 'Electronegatividad'
        };
      case 'name':
        return {
          name: 'Name',
          label: 'Nombre'
        };
      case 'electronicConfiguration':
        return {
          name: 'E Config',
          label: 'Config. Electronica'
        };
      case 'ionizationEnergy':
        return {
          name: 'Ionization Energy',
          label: 'Energía Ionización'
        };
      case 'oxidationStates':
        return {
          name: 'Oxidation States',
          label: 'Estados Oxidación'
        };
      default: 
        return false;
    }
  }, []);

  return {
    getLabel,
    getLabelBlock
  };
};

export default UseLabels;