# Great Circles as Geodesics of the Sphere

## An End-to-End Metacognitive Mathematics Solution

**Problem:** DG-02 in the [local problem bank](problems.md).  
**Approach:** a Hybrid Five-Faculty Knowledge Graph whose agents own mathematical proof obligations.  
**Evidence status:** the complete mathematical argument is given below. Agent messages and repair episodes are explicitly illustrative; no deployed multi-agent run or proof-assistant certificate is claimed.

Every agent contains **Ego, Memory, Intellect, Sense, and Action**. Ego fixes its goal and coordinates publication; Memory holds definitions and proved imports; Intellect selects a strategy; Sense audits hypotheses and boundary conditions; Action executes deductions and checks the output. The faculty table describes these capacities inside each node, rather than five separate faculty agents.

Logical dependencies form a DAG. Iteration and diagnostic feedback belong to the orchestration layer. A diagnostic can request a revised proof but cannot establish a premise by assuming its downstream conclusion. Changed exports invalidate dependent certificates until they are rechecked. Numerical examples illustrate the argument; the universal conclusions follow from the proof.

## 1. Target Theorem and Geometric Contract

> On the round sphere $S_R^2\subset\mathbb R^3$, R>0, every nonconstant unit-speed geodesic traces a great circle. Conversely every unit-speed great-circle arc is a geodesic.

A great circle is the sphere's intersection with a two-dimensional plane through the origin. A geodesic has zero covariant acceleration. This is an intrinsic condition: its ordinary three-dimensional acceleration need not be zero.

**Imports:** for the induced metric, the Levi-Civita covariant derivative is the tangential projection of the ambient derivative; elementary linear ODE uniqueness; inner-product differentiation. Curves are C², parameterized by arc length s. Global shortest-path claims are outside this theorem.

## 2. Five-Agent Graph

```text
N1 Sphere/initial data → N2 Normal acceleration → N3 Harmonic ODE ─┐
N1 → N4 Great-circle converse ──────────────────────────────────┴→ N5 Classification
```

| Node | Memory | Sense | Intellect | Action | Ego |
|---|---|---|---|---|---|
| N1 Geometry | Round metric and arc length | Require R>0 and unit speed | Fix point and tangent data | Differentiate constraints | Frame both implications |
| N2 Acceleration | Tangential-projection connection | Separate ambient and intrinsic derivatives | Use normal-line characterization | Derive radial acceleration | Build geometric bridge |
| N3 ODE | Linear ODE solution | Respect initial constraints | Solve oscillator | Identify a fixed origin plane | Establish every geodesic is great-circle |
| N4 Converse | Great-circle parametrization | Require orthonormal directions | Compute tangential acceleration | Verify geodesic equation | Establish sufficiency |
| N5 Synthesis | Both proof branches | Avoid global minimizing overclaim | Join necessity and converse | Audit parametrizations | Export classification |

## 3. Full Node-by-Node Proof

### N1 — Sphere and Speed Constraints

Let gamma(s) be a unit-speed geodesic. The sphere and speed conditions are

$$\langle\gamma,\gamma\rangle=R^2,\qquad\langle\gamma',\gamma'\rangle=1.$$

Differentiating the first once gives $\langle\gamma,\gamma'\rangle=0$, so velocity is tangent. Differentiating again gives

$$\langle\gamma,\gamma''\rangle=-\langle\gamma',\gamma'\rangle=-1.$$

These identities are valid along the whole curve.

### N2 — Covariant Acceleration Becomes a Radial Equation

The geodesic condition says the tangential projection of gamma'' is zero. The normal line at gamma is spanned by gamma itself. Hence $\gamma''=\lambda(s)\gamma$. Taking inner products with gamma and using N1 gives $\lambda(s)R^2=-1$, so

$$\gamma''=-\frac1{R^2}\gamma.$$

This nonzero inward acceleration keeps a geodesic on the curved sphere while its intrinsic acceleration vanishes.

### N3 — Solve and Identify the Great Circle

At s=0 choose initial point p and unit tangent v, so ||p||=R, ||v||=1, and p·v=0. The unique solution of N2's ODE with these data is

$$\gamma(s)=p\cos(s/R)+Rv\sin(s/R).$$

Its image stays in the fixed plane span(p,v), which passes through the origin. Writing e₁=p/R and e₂=v gives an orthonormal pair and

$$\gamma(s)=R\big(e_1\cos(s/R)+e_2\sin(s/R)\big).$$

It therefore traces a great-circle arc. Any other initial parameter value can be shifted to zero, so this covers every unit-speed geodesic locally and throughout its parameter interval by uniqueness.

### N4 — Verify the Converse Independently

Given any orthonormal e₁,e₂, the last formula satisfies ||gamma||=R, ||gamma'||=1, and gamma''=−gamma/R². Its acceleration is normal to the sphere, so its tangential projection is zero. The curve is a geodesic. This check does not assume the forward classification.

### N5 — Classification Closure

N3 proves necessity and N4 proves sufficiency. Initial data determine a unique parameterized geodesic, while reversing the tangent reverses direction along the same great circle. The theorem follows. $\square$

## 4. Worked Example and a Nonexample

On the unit sphere, p=(1,0,0), v=(0,1,0) gives

$$\gamma(s)=(\cos s,\sin s,0),$$

the equator. Ambient acceleration is −gamma, entirely normal, while speed is one.

Now consider a latitude with 0<|c|<1. Let rho=sqrt(1−c²) and

$$\eta(s)=(\rho\cos(s/\rho),\rho\sin(s/\rho),c).$$

This is unit speed. Its ambient acceleration is

$$\eta''=(-\cos(s/\rho)/\rho,-\sin(s/\rho)/\rho,0).$$

Since eta·eta''=−1, its tangential component on the unit sphere is eta''+eta. Its third coordinate is c, so this component is nonzero. The latitude is not a geodesic. When c=0, rho=1 and the tangential acceleration vanishes, recovering the equator.

## 5. Illustrative Interaction Trace

| Interaction | Evidence transferred |
|---|---|
| N1 → N2 | Sphere radius, unit-speed identity, gamma dot gamma'' equals −1 |
| N2 → N3 | Ambient oscillator equation with initial data |
| N3 → N5 | Explicit solution lies in an origin plane |
| N4 → N5 | Every great-circle parametrization has zero intrinsic acceleration |
| N5 → caller | Exact classification and permitted scope |

The intrinsic/extrinsic bridge is the main inter-agent insight: projecting a derivative converts geometric language into an equation N3 can solve.

## 6. Failure and Five-Faculty Repair

A branch identifies all geodesics with straight lines because it replaces covariant acceleration by ordinary acceleration.

```json
{"node":"N2","state":"STALLED","failing_faculty":"Sense","failed_definition":"geodesic means zero tangential acceleration","observed":"ambient acceleration incorrectly set to zero","repair_target":"connection interpretation","blocked_export":"straight-line classification"}
```

Memory retrieves the induced connection. Sense distinguishes the two derivatives. Intellect uses normal acceleration instead of zero ambient acceleration. Action derives gamma''=−gamma/R² and verifies the equator. Ego retains the classification target and replaces the invalid bridge.

## 7. Boundary Audit and Reusable Outputs

Unit speed matters: for constant speed c₀ the equation becomes gamma''=−c₀² gamma/R². Arbitrary reparameterizations may not satisfy the affine geodesic equation even when their images remain great circles. Constant geodesics are excluded by the nonconstant unit-speed contract.

A geodesic arc need not minimize length globally. On a unit great circle, an arc of length 3π/2 has the same endpoints as the opposite arc of length π/2. Antipodal endpoints admit multiple semicircular geodesics. Neither fact contradicts the classification.

Export the normal-acceleration bridge, the initial-value formula, and the great-circle equivalence. These supply concrete local geodesic intuition for later completeness and curvature problems.

## Evidence, Provenance, and Next Use

The proof is complete relative to the explicitly stated elementary definitions and supporting imports. The node outputs provide mathematical evidence for the stated theorem. Kernel verification would require a separate formalization of the exact statements and dependencies; the faculty labels themselves do not certify correctness.

**Mathematical reference:** [Harvard differential geometry notes: induced connections and geodesics](https://people.math.harvard.edu/~landesman/assets/math-230a-harvard-differential-geometry-notes.pdf).

**Framework references:** [Meta-Math essay](../../../Agentic-Math/Essay.md), [Agentic Math book](../../../Agentic-Math/Book.md), and the [Bézout worked example](../../../1-Number-Theory/projects/euclidean-algorithm-and-bezout-identity.md). The node decomposition and demonstration messages are authored for this example.
