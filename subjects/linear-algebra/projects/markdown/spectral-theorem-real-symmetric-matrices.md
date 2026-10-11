# Spectral Theorem for Real Symmetric Matrices

## An End-to-End Metacognitive Mathematics Solution

**Problem:** LA-03 in the [local problem bank](problems.md).  
**Approach:** a Hybrid Five-Faculty Knowledge Graph whose agents own mathematical proof obligations.  
**Evidence status:** the complete mathematical argument is given below. Agent messages and repair episodes are explicitly illustrative; no deployed multi-agent run or proof-assistant certificate is claimed.

Every agent contains **Ego, Memory, Intellect, Sense, and Action**. Ego fixes its goal and coordinates publication; Memory holds definitions and proved imports; Intellect selects a strategy; Sense audits hypotheses and boundary conditions; Action executes deductions and checks the output. The faculty table describes these capacities inside each node, rather than five separate faculty agents.

Logical dependencies form a DAG. Iteration and diagnostic feedback belong to the orchestration layer. A diagnostic can request a revised proof but cannot establish a premise by assuming its downstream conclusion. Changed exports invalidate dependent certificates until they are rechecked. Numerical examples illustrate the argument; the universal conclusions follow from the proof.

## 1. Target Theorem and Contract

> For every real symmetric n×n matrix A, there are a real orthogonal matrix Q and a real diagonal matrix Lambda such that $A=Q\Lambda Q^T$.

Equivalently, Euclidean space has an orthonormal basis of eigenvectors of A. The output includes real eigenvalues, orthogonal eigendirections, and a reconstruction certificate. It does not claim uniqueness of an eigenbasis within a repeated eigenspace.

**Definitions and imports:** A is symmetric when Aᵀ=A; Q is orthogonal when QᵀQ=I. Import compactness of the finite-dimensional unit sphere, the extreme value theorem, elementary differentiation, and induction on dimension. No diagonalization theorem is imported.

## 2. Four-Agent Knowledge Graph

```text
N1 Symmetric quadratic form → N2 Extremal eigenvector → N3 Invariant complement → N4 Inductive synthesis
```

| Node | Memory | Sense | Intellect | Action | Ego |
|---|---|---|---|---|---|
| N1 Contract | Symmetry and Euclidean inner product | Require finite dimension and real symmetry | Study quadratic form on unit sphere | Check continuity and compactness | Fix orthogonal decomposition |
| N2 Eigenvector | Maximum and tangent curves | Avoid assuming eigenvector existence | Differentiate at maximizing point | Prove Av=lambda v | Export first eigenpair |
| N3 Complement | Symmetric inner-product identity | Restriction must remain invariant and symmetric | Reduce dimension orthogonally | Verify restricted operator | Enable induction |
| N4 Assembly | Lower-dimensional result | Handle repeated eigenvalues | Combine orthonormal bases | Check diagonalization and reconstruction | Publish full theorem |

## 3. Complete Node-by-Node Proof

### N1 — Find a Maximum Without Assuming Spectral Structure

For n≥1, the function $R(x)=x^TAx$ is continuous on the compact unit sphere. It attains a maximum at a unit vector v. Set lambda=vᵀAv, which is real. This constructs a candidate eigenvector through optimization rather than assuming one exists.

### N2 — Convert the Maximum into an Eigenpair

Let w be any vector perpendicular to v, and consider

$$x(t)=\frac{v+tw}{\sqrt{1+t^2\|w\|^2}}.$$

This stays on the unit sphere, x(0)=v, and x'(0)=w. Since R(x(t)) has a maximum at zero, its derivative there vanishes. Symmetry gives

$$0=\left.\frac d{dt}x(t)^TAx(t)\right|_{t=0}=w^TAv+v^TAw=2w^TAv.$$

Thus Av is orthogonal to every vector in v-perp, so Av is a multiple of v. Taking its inner product with v gives $Av=\lambda v$. This establishes a real eigenpair for every nonzero-dimensional symmetric operator.

### N3 — Build a Smaller Symmetric Problem

For u in v-perp,

$$v^TAu=(Av)^Tu=\lambda v^Tu=0.$$

Hence Au remains in v-perp: this subspace is invariant. The restricted operator is symmetric because $\langle Au,w\rangle=\langle u,Aw\rangle$ still holds for u,w there.

The restriction acts on an (n−1)-dimensional Euclidean space. The proof has now generated a smaller instance of the same theorem, with the hypotheses preserved.

### N4 — Induction and Reconstruction

For n=1 the theorem is immediate. Assume it in dimension n−1. Apply it to the N3 restriction to obtain an orthonormal eigenbasis of v-perp. Adjoin v to get an orthonormal eigenbasis $v_1,\ldots,v_n$ of the original space.

Let Q have those vectors as columns and let Lambda contain their eigenvalues. Then AQ=Q Lambda and QᵀQ=I. Thus $Q^TAQ=\Lambda$ and $A=Q\Lambda Q^T$. This closes the induction. $\square$

As a further consequence,

$$A=\sum_{j=1}^n\lambda_jv_jv_j^T.$$

Different eigenvalues have perpendicular eigenvectors: if Au=lambda u and Av=mu v, symmetry gives $(\lambda-\mu)u^Tv=0$. Repeated eigenvalues are handled by an orthonormal basis within their eigenspace; they do not obstruct the theorem.

## 4. A Worked Three-Dimensional Example

Take

$$A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&4\end{pmatrix}.$$

The quadratic form is $2x^2+2xy+2y^2+4z^2$. Since $2xy\le x^2+y^2$, it is at most $3(x^2+y^2)+4z^2\le4$ on the unit sphere, with equality at e₃. N2 therefore supplies eigenpair (4,e₃).

N3 restricts to the xy-plane. Its matrix is [[2,1],[1,2]], with orthonormal eigenvectors

$$v_1=\frac1{\sqrt2}(1,1,0),\quad\lambda_1=3;\qquad v_2=\frac1{\sqrt2}(1,-1,0),\quad\lambda_2=1.$$

Together with v₃=e₃ and lambda₃=4, take

$$Q=\begin{pmatrix}1/\sqrt2&1/\sqrt2&0\\1/\sqrt2&-1/\sqrt2&0\\0&0&1\end{pmatrix},\qquad\Lambda=\operatorname{diag}(3,1,4).$$

Action verifies QᵀQ=I, Av_j=lambda_j v_j, and the reconstruction. The first two spectral contributions are

$$3v_1v_1^T+v_2v_2^T=\begin{pmatrix}2&1&0\\1&2&0\\0&0&0\end{pmatrix},$$

while $4v_3v_3^T$ supplies the last diagonal entry.

## 5. Illustrative Interaction Trace

| Interaction | Evidence |
|---|---|
| N1 → N2 | Compact sphere and quadratic form |
| N2 → N3 | Unit maximizing vector e₃ and eigenvalue 4 |
| N3 → lower-dimensional instance | Invariant xy-plane and symmetric 2×2 restriction |
| Smaller instance → N4 | Orthonormal eigenpairs with values 3 and 1 |
| N4 → caller | Orthogonal Q, real diagonal Lambda, and exact reconstruction |

The recursive workflow can revisit the same kind of agent at smaller dimensions. Its proof dependencies are well-founded because dimension strictly decreases.

## 6. Failure and Five-Faculty Repair

Suppose a branch normalizes several independently chosen eigenvectors and assumes they are orthogonal. For A=I, e₁ and e₁+e₂ are both eigenvectors, but normalization alone does not make them orthogonal.

```json
{"node":"N4","state":"STALLED","failing_faculty":"Action","failed_claim":"normalized eigenvectors form orthogonal Q","observed":"off-diagonal entry of Q transpose Q is nonzero","repair_target":"basis selection","blocked_export":"orthogonal diagonalization certificate"}
```

Memory recalls orthogonal complements and repeated eigenspaces. Sense checks whether the chosen vectors are independent. Intellect constructs an orthonormal basis in the repeated eigenspace. Action verifies its inner products and that every new vector remains an eigenvector. Ego republishes the decomposition only after QᵀQ=I holds.

## 7. Boundary Checks and Exported Modules

Symmetry is essential: [[1,1],[0,1]] has only one independent eigenvector and cannot be diagonalized. A real rotation may have no real eigenvalues. Positive eigenvalues are not required: symmetric matrices can have negative eigenvalues. The zero matrix is covered and permits any orthonormal basis.

Export the extremal-eigenvector lemma, invariant-complement lemma, orthogonal diagonalization, and rank-one spectral reconstruction. These are the exact imports used to develop singular value decomposition in the problem bank.

## Evidence, Provenance, and Next Use

**Additional execution check:** checked each displayed eigenpair and reconstructed all nine matrix entries from the rank-one spectral terms; the numerical checks agreed to floating-point precision.

The proof is complete relative to the explicitly stated elementary definitions and supporting imports. The node outputs provide mathematical evidence for the stated theorem. Kernel verification would require a separate formalization of the exact statements and dependencies; the faculty labels themselves do not certify correctness.

**Mathematical reference:** [MIT linear algebra: proof of the spectral theorem](https://ocw.mit.edu/courses/18-700-linear-algebra-fall-2013/pages/study-materials/).

**Framework references:** [Meta-Math essay](../../../Agentic-Math/Essay.md), [Agentic Math book](../../../Agentic-Math/Book.md), and the [Bézout worked example](../../../1-Number-Theory/projects/euclidean-algorithm-and-bezout-identity.md). The node decomposition and demonstration messages are authored for this example.
