import { useCallback } from 'react';

// use dimension
const UseLabels = () => {
  // get label
  const getLabel = useCallback((label: string) => {
    switch (label) {
      case 'atomicMass':
        return {
          name: 'Atomic Mass',
          label: 'Atomic Mass'
        };
      case 'atomicNumber':
        return {
          name: 'Atomic Number',
          label: 'Atomic Number'
        };
      case 'electronegativity':
        return {
          name: 'Electro-Negativity',
          label: 'Electro-Negativity'
        };
      case 'name':
        return {
          name: 'Name',
          label: 'Name'
        };
      case 'electronicConfiguration':
        return {
          name: 'E. Config',
          label: 'E. Config'
        };
      case 'ionizationEnergy':
        return {
          name: 'Ionization Energy',
          label: 'Ionization Energy'
        };
      case 'oxidationStates':
        return {
          name: 'Oxidation States',
          label: 'Oxidation States'
        };
      case 'boilingPoint':
        return {
          name: 'Boiling Point',
          label: 'Boiling Point'
        };
      case 'bondingType':
        return {
          name: 'Bonding Type',
          label: 'Bonding Type'
        };
      case 'density':
        return {
          name: 'Density',
          label: 'Density'
        };
      case 'electronAffinity':
        return {
          name: 'Electron Affinity',
          label: 'Electron Affinity'
        };
      case 'period':
        return {
          name: 'Period',
          label: 'Period'
        };
      case 'groupBlock':
        return {
          name: 'Group Block',
          label: 'Group Block'
        };
      case 'ionRadius':
        return {
          name: 'Ion Radius',
          label: 'Ion Radius'
        };
      case 'standardState':
        return {
          name: 'Standard State',
          label: 'Standard State'
        };
      case 'meltingPoint':
        return {
          name: 'Melting Point',
          label: 'Melting Point'
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
          label: 'Atomic Mass'
        };
      case 'atomicNumber':
        return {
          name: 'Atomic Number',
          label: 'Atomic Number'
        };
      case 'electronegativity':
        return {
          name: 'Electro-Negativity',
          label: 'Electro-Negativity'
        };
      case 'name':
        return {
          name: 'Name',
          label: 'Name'
        };
      case 'electronicConfiguration':
        return {
          name: 'E Config',
          label: 'E Config'
        };
      case 'ionizationEnergy':
        return {
          name: 'Ionization Energy',
          label: 'Ionization Energy'
        };
      case 'oxidationStates':
        return {
          name: 'Oxidation States',
          label: 'Oxidation States'
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