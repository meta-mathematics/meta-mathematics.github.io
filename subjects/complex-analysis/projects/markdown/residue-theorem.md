# Residue Theorem

## An End-to-End Metacognitive Mathematics Solution

**Problem:** CA-03 in the [local problem bank](problems.md).  
**Approach:** a Hybrid Five-Faculty Knowledge Graph whose agents own mathematical proof obligations.  
**Evidence status:** the complete mathematical argument is given below. Agent messages and repair episodes are explicitly illustrative; no deployed multi-agent run or proof-assistant certificate is claimed.

Every agent contains **Ego, Memory, Intellect, Sense, and Action**. Ego fixes its goal and coordinates publication; Memory holds definitions and proved imports; Intellect selects a strategy; Sense audits hypotheses and boundary conditions; Action executes deductions and checks the output. The faculty table describes these capacities inside each node, rather than five separate faculty agents.

Logical dependencies form a DAG. Iteration and diagnostic feedback belong to the orchestration layer. A diagnostic can request a revised proof but cannot establish a premise by assuming its downstream conclusion. Changed exports invalidate dependent certificates until they are rechecked. Numerical examples illustrate the argument; the universal conclusions follow from the proof.

## 1. Target Theorem and Contract

> Let D be a bounded Jordan domain whose positively oriented boundary gamma is piecewise smooth. Let f be holomorphic in an open neighborhood of the closure of D except for finitely many isolated singularities $a_1,\ldots,a_s$ inside D. Then
>
> $$\oint_\gamma f(z)\,dz=2\pi i\sum_{j=1}^s\operatorname{Res}(f,a_j).$$

The output is a contour identity with all interior singularities included. Singularities on the contour are excluded. Essential isolated singularities are allowed; the theorem does not require every singularity to be a pole.

**Definitions and imports:** a residue is the coefficient of $(z-a)^{-1}$ in the Laurent expansion; positive outer orientation is counterclockwise. Import the Laurent expansion theorem and uniform convergence on compact annuli. Import Cauchy–Goursat's boundary form: a function holomorphic near a finitely connected region's closure has zero integral around its full oriented boundary. This follows by cuts or subdivision into simply connected pieces with cancellation of internal sides; it is not the residue theorem being proved.

## 2. Five-Agent Graph

```text
N1 Domain audit → N2[j] Local Laurent/residue agents ─┐
N1 → N3 Excision and boundary orientation ──────────┴→ N4 Assembly → N5 Integral application
```

| Node | Memory | Sense | Intellect | Action | Ego |
|---|---|---|---|---|---|
| N1 Domain | Holomorphic domain and singularities | Exclude boundary singularities | Choose disjoint local disks | Audit all interior points | Fix global contour target |
| Each N2 Local | Laurent coefficients | Keep circle in punctured analytic neighborhood | Isolate exponent −1 | Integrate convergent expansion | Export one residue certificate |
| N3 Excision | Cauchy–Goursat boundary form | Track clockwise hole boundaries | Remove singularity disks | Prove outer/local integral identity | Preserve orientation |
| N4 Assembly | All local certificates | Include every singularity | Sum independent local contributions | Check factor 2πi | Export theorem |
| N5 Application | Contour identity and decay estimates | Audit improper limit | Separate real and arc integrals | Prove arc vanishes | Publish justified real integral |

## 3. Full Proof

### N1 — Construct the Excision Geometry

Choose small closed disks around the a_j, disjoint from one another and contained in D, with no other singularity in any disk. Let C_j be the positively oriented circle bounding the jth disk. Their radii can be chosen because the singularity list is finite and each point is isolated.

### Each N2 — Integrate a Local Laurent Expansion

Write $f(z)=\sum_{k\in\mathbb Z}c_k(z-a_j)^k$ in the punctured local neighborhood. Uniform convergence on C_j justifies termwise integration. Parameterizing $z=a_j+re^{it}$ yields

$$\oint_{C_j}(z-a_j)^k\,dz=\begin{cases}2\pi i&k=-1,\\0&k\ne-1.\end{cases}$$

For k≠−1 the exponential $e^{i(k+1)t}$ integrates to zero; for k=−1 the integrand times dz is i dt. Therefore $\oint_{C_j}f=2\pi i c_{-1}=2\pi i\operatorname{Res}(f,a_j)$.

### N3 — Excision Without a Sign Error

Remove the disk interiors from D. The resulting region has boundary gamma together with the hole circles in clockwise orientation. Cauchy–Goursat applies because every singularity has been excised. Hence

$$0=\oint_\gamma f-\sum_j\oint_{C_j}f.$$

Thus the outer contour integral equals the sum of the counterclockwise local integrals. An inner circle's orientation is reversed in the region boundary; the minus sign is part of the proof.

### N4 — Local-to-Global Assembly

Substitute the N2 certificates into the N3 identity. This gives exactly the theorem. With no singularities, the sum is empty and the result reduces to Cauchy–Goursat. $\square$

### N5 — A Complete Real-Integral Application

For $f(z)=1/(1+z^2)$, take the real segment from −R to R followed by the upper semicircle, R>1. The only interior pole is i, with

$$\operatorname{Res}(f,i)=\lim_{z\to i}\frac{z-i}{(z-i)(z+i)}=\frac1{2i}.$$

The contour integral is therefore pi. On the arc, $|1+z^2|\ge R^2-1$ and its length is pi R, giving

$$\left|\int_{\mathrm{arc}}\frac{dz}{1+z^2}\right|\le\frac{\pi R}{R^2-1}\longrightarrow0.$$

The real integrand is absolutely integrable: it is bounded near zero and at most $1/x^2$ for |x|≥1. Passing to the improper limit gives

$$\int_{-\infty}^{\infty}\frac{dx}{1+x^2}=\pi.$$

A residue calculation alone would not justify this conclusion without the arc estimate and existence of the real improper integral.

## 4. Parallel Local Work: A Two-Pole Example

Take $f(z)=(z+1)/((z-1)(z-2))$ on |z|=3, positively oriented. The two local agents independently obtain

$$\operatorname{Res}(f,1)=\frac2{-1}=-2,\qquad\operatorname{Res}(f,2)=\frac3{1}=3.$$

N4 sums them to 1, so the contour integral is $2\pi i$. Both poles must be included even though their contributions partially cancel.

| Interaction | Evidence transferred |
|---|---|
| N1 → local agents | Disjoint analytic neighborhoods at 1 and 2 |
| Local agent 1 → N4 | Residue −2 with simple-pole calculation |
| Local agent 2 → N4 | Residue 3 with simple-pole calculation |
| N3 → N4 | Outer integral equals sum of positively oriented local integrals |
| N4 → caller | Total residue 1 and contour integral 2πi |

## 5. Failure and Five-Faculty Repair

Suppose a branch uses |z|=1 for 1/(1+z²). Both poles lie on the contour; the theorem's contract fails.

```json
{"node":"N1","state":"STALLED","failing_faculty":"Sense","failed_hypothesis":"no singularities on contour","observed":"poles i and -i on |z|=1","repair_target":"contour selection","blocked_export":"ordinary residue-theorem contour integral"}
```

Memory retrieves the domain hypothesis. Sense identifies both boundary poles. Intellect selects |z|=2 for a revised problem. Action checks both poles are interior and computes residues 1/(2i) and −1/(2i), whose sum is zero. Ego exports integral zero for the revised contour. An indented contour or principal value would be a different problem requiring additional analysis.

## 6. Boundary Checks and Exported Modules

- Reversing the outer orientation reverses the integral's sign.
- Higher-order poles still use the Laurent coefficient, not the simple-pole limit formula.
- A removable singularity has residue zero.
- Arc decay must be proved for the chosen function and contour.
- A plot or sampled singularity search does not establish the exhaustive pole list.

Export the local Laurent-integral lemma, the excision identity, the finite-singularity residue theorem, and the rational-integral application. These modules support the argument principle and Rouché's theorem in the problem bank.

## Evidence, Provenance, and Next Use

The proof is complete relative to the explicitly stated elementary definitions and supporting imports. The node outputs provide mathematical evidence for the stated theorem. Kernel verification would require a separate formalization of the exact statements and dependencies; the faculty labels themselves do not certify correctness.

**Mathematical reference:** [Harvard complex analysis, Laurent series and residue theorem lectures](https://people.math.harvard.edu/~siu/math113/).

**Framework references:** [Meta-Math essay](../../../Agentic-Math/Essay.md), [Agentic Math book](../../../Agentic-Math/Book.md), and the [Bézout worked example](../../../1-Number-Theory/projects/euclidean-algorithm-and-bezout-identity.md). The node decomposition and demonstration messages are authored for this example.
