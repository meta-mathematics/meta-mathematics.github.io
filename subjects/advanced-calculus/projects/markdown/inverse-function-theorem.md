# Inverse Function Theorem

## An End-to-End Metacognitive Mathematics Solution

**Problem:** AC-04 in the [local problem bank](problems.md).  
**Approach:** a Hybrid Five-Faculty Knowledge Graph whose agents own mathematical proof obligations.  
**Evidence status:** the complete mathematical argument is given below. Agent messages and repair episodes are explicitly illustrative; no deployed multi-agent run or proof-assistant certificate is claimed.

Every agent contains **Ego, Memory, Intellect, Sense, and Action**. Ego fixes its goal and coordinates publication; Memory holds definitions and proved imports; Intellect selects a strategy; Sense audits hypotheses and boundary conditions; Action executes deductions and checks the output. The faculty table describes these capacities inside each node, rather than five separate faculty agents.

Logical dependencies form a DAG. Iteration and diagnostic feedback belong to the orchestration layer. A diagnostic can request a revised proof but cannot establish a premise by assuming its downstream conclusion. Changed exports invalidate dependent certificates until they are rechecked. Numerical examples illustrate the argument; the universal conclusions follow from the proof.

## 1. Target Theorem and Contract

> Let $U\subset\mathbb R^n$ be open, $F:U\to\mathbb R^n$ be $C^1$, and $a\in U$ have invertible derivative $L=DF(a)$. There are open neighborhoods V of a and W of F(a) such that $F:V\to W$ is a bijection with C¹ inverse H, and
>
> $$DH(y)=DF(H(y))^{-1}.$$

The goal has four obligations: existence of nearby solutions, their local uniqueness, continuous dependence on the target, and differentiability of the inverse. An invertible Jacobian at one point does not assert global bijectivity.

**Imports:** Euclidean completeness, integration of continuous derivatives along segments, elementary matrix inversion, and the [completed Banach fixed-point module](../../../2-Analysis/Real-Analysis/projects/banach-fixed-point-theorem.md). Operator norms are induced by the Euclidean norm. The proof constructs its neighborhoods rather than assuming an inverse already exists.

## 2. Five-Agent Graph and Faculties

```text
N1 Normalization → N2 Contraction/self-map → N3 Local inverse ─┐
Banach module ─────────────────────────────→ N3             │
N3 → N4 Inverse differentiability ──────────────────────────┴→ N5 Original-coordinate synthesis
```

| Node | Memory | Sense | Intellect | Action | Ego |
|---|---|---|---|---|---|
| N1 Normalize | Jacobian and linear inverses | Require invertible L | Make derivative identity at zero | Transform coordinates | Fix local target |
| N2 Contract | Derivative continuity and segment estimates | Check complete invariant ball | Recast equation as fixed point | Prove contraction and self-map bounds | Build valid solver |
| N3 Inverse | Banach existence and uniqueness | Keep solutions inside open neighborhood | Separate onto and one-to-one | Prove bijection and Lipschitz inverse | Close topological obligation |
| N4 Derivative | First-order remainder and matrix bounds | Do not assume differentiability of inverse | Solve increment relation | Prove derivative formula and continuity | Close C¹ obligation |
| N5 Synthesis | All local certificates | Restore original coordinates | Transport inverse and derivative | Audit domains and formula | Publish full IFT |

## 3. Full Node-by-Node Proof

### N1 — Normalize the Linear Part

Set

$$G(z)=L^{-1}\big(F(a+z)-F(a)\big).$$

Then G(0)=0 and DG(0)=I. Its domain is an open neighborhood of zero. By continuity of DG choose rho>0 such that the closed Euclidean ball $\overline B_\rho$ lies in that domain and

$$\|DG(z)-I\|\le\tfrac12\quad(z\in\overline B_\rho).$$

Write E(z)=G(z)−z. For x,z in this ball the connecting segment remains inside it, and integration of DE along that segment gives

$$\|E(x)-E(z)\|\le\tfrac12\|x-z\|.$$

In particular E(0)=0 and ||E(z)||≤||z||/2.

### N2 — Make Nearby Equations into Contractions

For a normalized target y with ||y||<rho/2, define

$$T_y(z)=y-E(z)=z-G(z)+y.$$

Its fixed points are exactly the solutions G(z)=y. The previous estimate gives contraction factor 1/2. Also

$$\|T_y(z)\|\le\|y\|+\tfrac12\rho<\rho$$

for z in the closed ball. Thus T_y maps a complete ball into itself. Both conditions are required to import Banach's theorem.

### N3 — Obtain an Open Local Bijection

Banach gives exactly one solution in the closed ball, and the strict self-map bound places it in the open ball. Separately, for x,z in the closed ball,

$$\|G(x)-G(z)\|\ge\|x-z\|-\|E(x)-E(z)\|\ge\tfrac12\|x-z\|.$$

Hence G is injective on the ball. Put

$$W_0=B_{\rho/2},\qquad V_0=B_\rho\cap G^{-1}(W_0).$$

The set V_0 is open, contains zero, and G maps it bijectively onto W_0. Let H_0 be its inverse. Applying the lower bound to H_0(y),H_0(y') gives

$$\|H_0(y)-H_0(y')\|\le2\|y-y'\|.$$

So the inverse is Lipschitz and in particular continuous. This does not yet establish its differentiability.

### N4 — Derive the Inverse Derivative

Every DG(x) on the ball is invertible: $\|DG(x)-I\|\le1/2$ permits the convergent matrix geometric series for its inverse, with inverse norm at most 2.

Fix y in W_0 and x=H_0(y). For small k with y+k in W_0, set h=H_0(y+k)−H_0(y). The Lipschitz bound gives ||h||≤2||k||. Differentiability of G at x gives

$$k=G(x+h)-G(x)=DG(x)h+r(h),\qquad\|r(h)\|=o(\|h\|).$$

Therefore

$$h=DG(x)^{-1}k-DG(x)^{-1}r(h)=DG(x)^{-1}k+o(\|k\|).$$

The remainder conversion is justified by ||h||≤2||k|| and the bounded inverse matrix. Thus $DH_0(y)=DG(H_0(y))^{-1}$. This derivative is continuous because H_0 and DG are continuous and matrix inversion is continuous on invertible matrices. Hence H_0 is C¹.

### N5 — Restore Original Coordinates

Choose V=a+V_0 and W=F(a)+L W_0. These are open neighborhoods. Their inverse is

$$H(Y)=a+H_0\big(L^{-1}(Y-F(a))\big).$$

The chain rule gives $DH(Y)=DF(H(Y))^{-1}$. All four obligations are now proved, so the original-coordinate theorem follows. $\square$

## 4. Worked Example with an Explicit Neighborhood

Let $F(x,y)=(x+y^2,y+x^2)$ at a=(0,0). Its derivative at zero is I. On the closed Euclidean ball of radius rho=1/4,

$$DF-I=\begin{pmatrix}0&2y\\2x&0\end{pmatrix},\qquad\|DF-I\|=2\max(|x|,|y|)\le\tfrac12.$$

Thus every target of norm less than 1/8 has exactly one preimage in the chosen local neighborhood. The fixed-point update is

$$(x,y)\longmapsto(u-y^2,v-x^2).$$

For target $(u,v)=(1/20,1/20)$, symmetry gives x=y=s, where

$$s+s^2=\tfrac1{20},\qquad s=\frac{\sqrt{6/5}-1}{2}\approx0.0477225575.$$

The negative quadratic root is outside the local ball and does not contradict local uniqueness. At this preimage,

$$DH=\frac1{1-4s^2}\begin{pmatrix}1&-2s\\-2s&1\end{pmatrix}.$$

The Banach module also supplies an error bound for the numerical iteration, using q=1/2.

## 5. Illustrative Messages and a Failed Branch

| Interaction | Certificate |
|---|---|
| N1 → N2 | Normalized map and uniform derivative bound on the closed ball |
| N2 → N3 | Complete self-map, contraction 1/2, target-radius restriction |
| Banach → N3 | Unique fixed point for each admissible target |
| N3 → N4 | Local inverse and Lipschitz factor 2 |
| N4 → N5 | C¹ inverse with proved derivative formula |
| N5 → caller | Open neighborhoods in original coordinates |

A failed branch selects a large target but reuses the small-ball certificate. For the example, a target with norm 1 is not covered by the radius-1/8 guarantee.

```json
{"node":"N2","state":"STALLED","failing_faculty":"Sense","failed_hypothesis":"target norm < rho/2","observed":"target norm 1, rho=1/4","repair_target":"target/domain contract","blocked_export":"small-ball existence certificate"}
```

Memory retrieves the radius relation. Sense retains the target mismatch. Intellect either restricts the target or develops a new valid neighborhood. Action rechecks the self-map estimate. Ego publishes only the result supported by that estimate; failure of this certificate alone is not proof that a large-target solution does not exist.

## 6. Boundary Audit and Exports

At F(x)=x³ near zero, the inverse exists as a continuous map but fails the claimed differentiability; DF(0) is not invertible. Polar coordinates are locally invertible away from r=0 but remain globally periodic in angle. These distinguish failure of a sufficient hypothesis from impossibility of every inverse.

Export the normalized contraction construction, local inverse, Lipschitz bound, and C¹ derivative formula. The example explicitly demonstrates a theorem module imported from another subject's graph.

## Evidence, Provenance, and Next Use

**Additional execution check:** verified that the displayed symmetric solution maps to $(1/20,1/20)$, lies in the radius-1/4 ball, and has invertible Jacobian. The target lies inside the stated radius-1/8 neighborhood.

The proof is complete relative to the explicitly stated elementary definitions and supporting imports. The node outputs provide mathematical evidence for the stated theorem. Kernel verification would require a separate formalization of the exact statements and dependencies; the faculty labels themselves do not certify correctness.

**Mathematical reference:** [University of Pennsylvania: contraction-based proof of the inverse function theorem](https://www2.math.upenn.edu/~gressman/analysis/12-inversefuncthm.html).

**Framework references:** [Meta-Math essay](../../../Agentic-Math/Essay.md), [Agentic Math book](../../../Agentic-Math/Book.md), and the [Bézout worked example](../../../1-Number-Theory/projects/euclidean-algorithm-and-bezout-identity.md). The node decomposition and demonstration messages are authored for this example.
