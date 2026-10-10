# Graduate Optimization and Numerical Analysis: Graduate Course and Book Outline

> This is an original, graduate-level syllabus map synthesized from standard course coverage. It is a planning document, not a transcription of any one textbook table of contents. Topic order and depth vary by program and instructor.

## Audience and prerequisites

Linear algebra, multivariable calculus, real analysis, and programming for computational labs.

## Learning outcomes

By the end of the course, a student should be able to:
- state the central definitions and explain the role of their hypotheses;
- prove and apply the core theorems in the syllabus, identifying which results are imported;
- construct examples and counterexamples that test the scope of a claim;
- connect the subject to at least one neighboring area without treating an analogy as a proof.

## Proposed chapter sequence

1. **Problem formulation.** Feasible sets, objective functions, convexity, constraints, and mathematical modeling.
2. **Linear programming.** Geometry, simplex ideas, duality, complementary slackness, and certificates.
3. **Convex analysis.** Convex sets and functions, separation, subgradients, conjugates, and proximal maps.
4. **Constrained optimization.** Lagrange multipliers, KKT conditions, constraint qualifications, and sensitivity.
5. **First-order algorithms.** Gradient, projected gradient, proximal, and accelerated methods with convergence hypotheses.
6. **Second-order and Newton methods.** Hessian models, line search, trust regions, and local convergence.
7. **Numerical error and conditioning.** Floating-point arithmetic, stability, conditioning, and backward error.
8. **Approximation and interpolation.** Polynomial approximation, splines, interpolation error, and least squares.
9. **Numerical linear algebra.** Factorizations, eigenvalue methods, iterative solvers, and preconditioning.
10. **Quadrature and ODE solvers.** Error estimates, adaptive methods, stability regions, and stiffness.
11. **Numerical PDE methods.** Finite difference, finite element, consistency, stability, and convergence.
12. **Computational reproducibility.** Benchmarks, stopping criteria, complexity, sensitivity, and evidence limits.

## Detailed Table of Contents

### Part I — Foundations and Core Language

#### Chapter 1. Mathematical modeling and numerical reliability

##### 1.1 Optimization models

###### 1.1.1 Variables and constraints
###### 1.1.2 Feasible sets
###### 1.1.3 Objective geometry

##### 1.2 Numerical representation

###### 1.2.1 Floating-point arithmetic
###### 1.2.2 Rounding
###### 1.2.3 Stable and unstable formulations

#### Chapter 2. Linear and convex optimization

##### 2.1 Linear programming

###### 2.1.1 Polyhedra
###### 2.1.2 Simplex method
###### 2.1.3 Optimality certificates

##### 2.2 Duality

###### 2.2.1 Weak and strong duality
###### 2.2.2 Complementary slackness
###### 2.2.3 Sensitivity

#### Chapter 3. Convex analysis

##### 3.1 Convex sets and functions

###### 3.1.1 Separation
###### 3.1.2 Epigraphs
###### 3.1.3 Supporting hyperplanes

##### 3.2 Subgradients and conjugates

###### 3.2.1 Fenchel conjugacy
###### 3.2.2 Subdifferentials
###### 3.2.3 Proximal maps

### Part II — Central Theory and Techniques

#### Chapter 4. Constrained nonlinear optimization

##### 4.1 Lagrange multipliers

###### 4.1.1 Equality constraints
###### 4.1.2 Regularity
###### 4.1.3 Second-order conditions

##### 4.2 KKT theory

###### 4.2.1 Inequality constraints
###### 4.2.2 Constraint qualifications
###### 4.2.3 Saddle-point interpretation

#### Chapter 5. First-order optimization algorithms

##### 5.1 Gradient methods

###### 5.1.1 Descent lemma
###### 5.1.2 Step-size rules
###### 5.1.3 Convergence rates

##### 5.2 Proximal and accelerated methods

###### 5.2.1 Composite objectives
###### 5.2.2 Proximal gradient
###### 5.2.3 Acceleration principles

#### Chapter 6. Second-order and large-scale methods

##### 6.1 Newton methods

###### 6.1.1 Local convergence
###### 6.1.2 Damping
###### 6.1.3 Quasi-Newton updates

##### 6.2 Trust-region methods

###### 6.2.1 Models and subproblems
###### 6.2.2 Acceptance ratios
###### 6.2.3 Globalization

#### Chapter 7. Approximation and interpolation

##### 7.1 Polynomial approximation

###### 7.1.1 Interpolation error
###### 7.1.2 Chebyshev ideas
###### 7.1.3 Least-squares approximation

##### 7.2 Splines and approximation spaces

###### 7.2.1 Piecewise polynomials
###### 7.2.2 Splines
###### 7.2.3 Approximation order

#### Chapter 8. Numerical linear algebra

##### 8.1 Direct methods

###### 8.1.1 Gaussian elimination
###### 8.1.2 LU, QR, and Cholesky
###### 8.1.3 Stability

##### 8.2 Iterative methods

###### 8.2.1 Krylov subspaces
###### 8.2.2 Conjugate gradients
###### 8.2.3 Preconditioning

### Part III — Further Theory and Applications

#### Chapter 9. Quadrature, differentiation, and ODEs

##### 9.1 Numerical integration

###### 9.1.1 Newton–Cotes
###### 9.1.2 Gaussian quadrature
###### 9.1.3 Adaptive error control

##### 9.2 ODE methods

###### 9.2.1 Runge–Kutta
###### 9.2.2 Stability regions
###### 9.2.3 Stiffness and adaptive stepping

#### Chapter 10. Numerical PDE and computational practice

##### 10.1 Finite differences and elements

###### 10.1.1 Consistency
###### 10.1.2 Stability
###### 10.1.3 Convergence
###### 10.1.4 Variational formulation

##### 10.2 Reproducible computation

###### 10.2.1 Verification and validation
###### 10.2.2 Benchmarks
###### 10.2.3 Uncertainty and stopping criteria


## Resource-collection plan

For each chapter, collect a primary textbook treatment, one alternative exposition or lecture-note source, prerequisite reminders, a representative theorem with a complete proof, examples and counterexamples, and exercises grouped by technique. Record exact editions, chapter or section numbers, stable URLs or catalog metadata, and any access or license restrictions. Keep source excerpts separate from original Meta-Math exposition.

## Future Meta-Math project pathway

Select projects only after the resource index is in place. Prefer a progression from a foundational theorem to a standard application and then to a graduate-level synthesis. For each selected project, record the exact statement, definitions, hypotheses, supporting imports, a dependency workflow, faculty-specific node activities, a continuous proof, a boundary test, and an evidence/review status. Avoid implying formal verification unless a proof assistant actually checks the stated theorem.

## Suggested starting references

- Boyd and Vandenberghe, Convex Optimization
- Nocedal and Wright, Numerical Optimization
- Trefethen and Bau, Numerical Linear Algebra

### Scope notes

Treat this syllabus as a flexible map. An instructor may omit or replace advanced units, and some programs teach a topic as a separate course. Before building a book index, note which chapters are core, optional, prerequisites, or deferred; cross-link overlapping material rather than duplicating it.
