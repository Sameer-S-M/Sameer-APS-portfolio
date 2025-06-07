export interface Reference {
  name: string;
  url: string;
}

export interface Complexity {
  best: string;
  worst: string;
}

export interface ComplexityOperation {
  name: string;
  averageCase: string;
  worstCase: string;
}

export interface ComplexityDetails {
  operations: ComplexityOperation[];
}

export interface AlgorithmicBackbone {
  title: string;
  concept: string;
  application: string;
  imageUrl: string;
  workflowUrl: string;
  advantages: string[];
  complexity: ComplexityDetails;
  timeComplexity: Complexity;
  spaceComplexity: Complexity;
  codeLink?: string;
}

export interface DetailedContent {
  businessContext: string;
  technicalApproach: string[];
  algorithmicBackbone: AlgorithmicBackbone[];
  references: Reference[];
}

export interface AppliedSolutionConcept {
  id: string;
  title: string;
  overview: string;
  keywords: string[];
  algorithmicBackbone: AlgorithmicBackbone[];
  overallOutcome: string[];
  overallTradeoffs: string[];
  overallBusinessUseCase: string[];
  references?: {
    text: string;
    url: string;
  }[];
}

export interface AppliedSolutionConceptResponse {
  appliedSolutionConcepts: AppliedSolutionConcept[];
} 